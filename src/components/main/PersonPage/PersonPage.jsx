import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import * as constants from "../../../constants";
import PersonOverview from "./PersonOverview/PersonOverview";
import PersonCredits from "./PersonCredits/PersonCredits";
import PersonBiography from "./PersonBiography/PersonBiography";

export default function PersonPage(props) {
  const maxBiographyLength = 1000;
  const params = useParams();
  const personId = params.personId;
  const [personData, setPersonData] = useState({});
  const [castedIn, setCastedIn] = useState([]);
  const [crewIn, setCrewIn] = useState([]);
  const [filmsStarred, setFilmsStarred] = useState([]);
  const [showsStarred, setShowsStarred] = useState([]);
  const [isReadMore, setIsReadMore] = useState(false);
  const [biography, setBiography] = useState("");

  useEffect(() => {
    const fetchPersonData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}person/${personId}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      setPersonData(jsonData);
      setBiography(jsonData.biography);
    };

    const fetchCredits = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}person/${personId}/combined_credits?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();
      setCastedIn(jsonData.cast);
      setCrewIn(jsonData.crew);

      const filmsArr = new Array();
      const showsArr = new Array();

      for (let el of jsonData.cast) {
        if (el.media_type == "tv") {
          showsArr.push(el);
        } else if (el.media_type == "movie") {
          filmsArr.push(el);
        }
      }

      setFilmsStarred(filmsArr);
      setShowsStarred(showsArr);
    };

    fetchCredits();
    fetchPersonData();
  }, []);
  return (
    <div>
      <Header noBackdrop={true}></Header>
      <div className="max-w-4/5 text-gray-200 mx-auto mb-5">
        <div className="mx-4 mt-5  lg:mx-auto grid grid-cols-1 gap-7 lg:grid-cols-7">
          <div className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
            <div className="relative flex items-center justify-center">
              <div className="absolute lg:bg-black rounded-md inset-0 blur"></div>
              <img
                className="rounded-md w-64 lg:w-full relative border-2 border-neutral-800"
                src={`${constants.IMAGES_BASE_PATH}w500${personData.profile_path}`}
              ></img>
            </div>
          </div>

          <div className="lg:col-start-3 lg:col-end-8 lg:row-start-1 lg:row-end-2">
            <h2 className="text-2xl lg:text-3xl font-lato text-white font-bold text-center lg:text-left">
              {personData.name}
            </h2>
            <PersonBiography
              biography={biography}
              maxBiographyLength={maxBiographyLength}
            />
          </div>

          <div className="lg:col-start-1 lg:col-end-3 ">
            <PersonOverview
              gender={personData.gender == 1 ? "Female" : "Male"}
              biography={personData.biography}
              birthday={personData.birthday}
              deathday={personData.deathday}
              knownFor={personData.known_for_department}
              name={personData.name}
              placeOfBirth={personData.place_of_birth}
              profilePath={`${constants.IMAGES_BASE_PATH}w500${personData.profile_path}`}
            />
          </div>

          <div className="lg:col-start-3 lg:col-end-8 lg:row-start-2 lg:row-end-3">
            <PersonCredits
              castedIn={castedIn}
              filmsStarred={filmsStarred}
              showsStarred={showsStarred}
              name={personData.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
