import { useLocation, useParams } from "react-router-dom";
import Header from "../../../header/Header";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import * as constants from "../../../../constants";

export default function FullCast(props) {
  const prodId = useParams().prodId;
  console.log(prodId);
  const type = useLocation().pathname.split("/")[3];
  const [productionData, setProductionData] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}/${type}/${prodId}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();

      setProductionData(jsonData);
    };

    const fetchCrew = async () => {
      const getCrew = await fetch(
        `${constants.TMDB_BASE_PATH}/${type}/${prodId}/credits?api_key=${constants.API_KEY}`
      );
      const jsonCrew = await getCrew.json();

      // get directors
      let filteredDirectors = [];
      jsonCrew.crew.forEach((member) =>
        member.job === "Director" ? filteredDirectors.push(member.name) : false
      );

      // get actors
      let actors = [];

      jsonCrew.cast.forEach((member) => {
        member.known_for_department === "Acting"
          ? actors.push({
              name: member.name,
              id: member.id,
              profile_path: member.profile_path,
              character: member.character,
            })
          : false;
      });

      setActors(actors);
    };

    fetchCrew();
    fetchData();
  }, [prodId]);

  return (
    <div>
      <Header noBackdrop={true}></Header>
      <div className="max-w-4/5 mx-4 lg:mx-auto my-5">
        <Link to={`/${type == "movie" ? "movies" : "tvshows"}/${prodId}`}>
          <div className="flex items-center">
            <IconContext.Provider value={{ color: "white" }}>
              <MdKeyboardArrowLeft className="w-7 lg:w-9 h-7 lg:h-9 lg:-ml-2 -ml-1"></MdKeyboardArrowLeft>
            </IconContext.Provider>

            <h3 className="text-white text-md lg:text-lg">
              Return to{" "}
              <span className="text-secondary text-lg lg:text-xl underline">
                {productionData.title
                  ? productionData.title
                  : productionData.name}
              </span>
            </h3>
          </div>
        </Link>
        <div className="flex flex-wrap gap-5 justify-between font-lato my-5">
          {actors.map((actor) => {
            if (actor.profile_path) {
              return (
                <Link to={`/person/${actor.id}`}>
                  <div className="w-24 lg:w-40 bg-neutral-900">
                    <div className="relative">
                      <div className="bg-black absolute inset-0 blur-sm rounded-md"></div>
                      <div className="relative border-2 rounded-md border-neutral-700">
                        <img
                          className=" rounded-md"
                          src={`${constants.IMAGES_BASE_PATH}w500${actor.profile_path}`}
                        ></img>
                      </div>
                    </div>

                    <p className="text-gray-100 font-bold">{actor.name}</p>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      {actor.character}
                    </p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
