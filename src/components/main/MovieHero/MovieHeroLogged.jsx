import * as constants from "../../../constants";
import { useState, useEffect, useContext } from "react";
import MovieBackdrop from "../ProductionPage/MovieBackdrop/MovieBackdrop";
import { LoggedContext } from "../../Context/Context";

export default function MovieHeroLogged() {
  const urlBase = constants.IMAGES_BASE_PATH + "original";
  const [data, setData] = useState([]);
  const [backdropPath, setBackdropPath] = useState("");
  const [releaseDate, setReleaseDate] = useState("2022");
  const [title, setTitle] = useState("Title");
  const [id, setId] = useState(1);
  const authContext = useContext(LoggedContext);
  useEffect(() => {
    const fetchData = async () => {
      const myData = await fetch(
        `${constants.TMDB_BASE_PATH}movie/800510?api_key=${constants.API_KEY}`
      );
      const jsonData = await myData.json();
      setData(jsonData);
      setBackdropPath(jsonData.backdrop_path);
      setTitle(jsonData.title);
      setReleaseDate(jsonData.release_date);
      setId(jsonData.id);
    };

    fetchData();
  }, []);
  return (
    <div className="font-ibm">
      <MovieBackdrop
        context={"main"}
        opacity={1}
        backdropImageUrl={urlBase + backdropPath}
        title={title}
        releaseDate={releaseDate.slice(0, 4)}
        main={true}
        id={id}
      ></MovieBackdrop>

      <div className="font-ibm max-w-4/5 mx-auto text-white text-2xl lg:text-4xl leading-6 lg:leading-9 flex flex-col items-center -mt-16 mb-10 lg:mb-0">
        <h2 className="text-white font-bold bg-clip-text">
          Discover something new
        </h2>
      </div>
    </div>
  );
}
