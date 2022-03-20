import React from "react";
import { useState, useEffect } from "react";
import MovieBackdrop from "../MoviePage/MovieBackdrop/MovieBackdrop";
import * as constants from "../../../constants";

let API_KEY = process.env.REACT_APP_API_KEY;

export default function MovieHero() {
  const urlBase = constants.IMAGES_BASE_PATH + "original";
  const [data, setData] = useState([]);
  const [backdropPath, setBackdropPath] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const myData = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${constants.API_KEY}`
      );
      const jsonData = await myData.json();
      setData(jsonData.results);
      setBackdropPath(jsonData.results[19].backdrop_path);
    };

    fetchData();
  }, []);
  return (
    <div className="font-ibm">
      <MovieBackdrop
        context={"main"}
        opacity={1}
        backdropImageUrl={urlBase + backdropPath}
      ></MovieBackdrop>

      <div className="font-ibm inset-x-0 bottom-0 text-white font-bold drop-shadow-3xl text-lg sm:text-3xl md:text-3xl leading-6 md:leading-9 flex flex-col items-center -mt-32">
        <h2 className="z-10">Discover new and trending TV Shows.</h2>
        <h2 className="z-10">Learn more about your favorite movies.</h2>
        <h2 className="z-10">Read popular users reviews.</h2>
        <h2 className="font-bold font-ibm text-4xl sm:text-6xl md:text-7xl bg-gradient-to-tr from-red-500 to-purple-600 text-transparent bg-clip-text mt-1 sm:mt-2 z-10">
          All in one place.
        </h2>
        <div className="rounded-lg text-sm m-6 relative">
          <div className="absolute -inset-0 bg-gradient-to-tr from-blue-500 bold to-green-500 rounded-lg blur-sm"></div>
          <div className="bg-neutral-900 relative border border-secondary px-4 py-2 rounded-lg">
            <button className="flex items-center md:text-lg font-ibm">
              <span className="bg-gradient-to-tr font-bold from-blue-500 bold to-green-500 bg-clip-text text-transparent">
                Log in with TMDB account
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
