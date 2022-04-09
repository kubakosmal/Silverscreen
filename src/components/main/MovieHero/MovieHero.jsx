import React, { useContext } from "react";
import { useState, useEffect } from "react";
import MovieBackdrop from "../MoviePage/MovieBackdrop/MovieBackdrop";
import * as constants from "../../../constants";
import { LoggedContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function MovieHero() {
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
      setBackdropPath(urlBase + jsonData.backdrop_path);
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
        backdropImageUrl={backdropPath}
        title={title}
        releaseDate={releaseDate.slice(0, 4)}
        main={true}
        id={id}
      ></MovieBackdrop>

      <div className="font-ibm inset-x-0 bottom-0 text-white font-bold drop-shadow-3xl text-lg sm:text-3xl lg:text-3xl leading-6 lg:leading-9 flex flex-col items-center -mt-32">
        <h2 className="z-10">Discover new and trending TV Shows.</h2>
        <h2 className="z-10">Learn more about your favorite movies.</h2>
        <h2 className="z-10">Read popular users reviews.</h2>
        <h2 className="font-bold font-ibm text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-tr from-red-500 to-purple-600 text-transparent bg-clip-text mt-1 sm:mt-2 z-10">
          All in one place.
        </h2>
        <div className="rounded-lg text-sm relative">
          <div className=""></div>
          {authContext.isLogged ? (
            false
          ) : (
            <Link to={"/login"}>
              <div className="bg-blue-600 relative px-4 py-2 m-3 rounded-lg border border-transparent hover:border-white duration-200">
                <button className="flex items-center text-sm font-lato font-bold">
                  <span className="text-white">LOG IN WITH TMDB ACCOUNT</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 -mr-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
