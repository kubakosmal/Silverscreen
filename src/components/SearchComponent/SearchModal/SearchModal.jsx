import React from "react";
import reactDom from "react-dom";
import { useEffect, useState } from "react/cjs/react.development";
import * as constants from "../../../constants";
import MoviePoster from "../../main/PopularMoviesList/MoviePoster/MoviePoster";
import ModalMovieResults from "./ModalMovieResults/ModalMovieResults";
import ModalShowsResults from "./ModalMovieResults/ModalShowsResults";
import TooShortQuery from "./TooShortQuery";

export default function SearchModal(props) {
  const [searchValue, setSearchValue] = useState("Trans");

  useEffect(() => {
    let rootElement = document.getElementById("root");
    rootElement.style.position = "fixed";

    return () => {
      rootElement.style.position = "";
    };
  });

  return reactDom.createPortal(
    <div className="absolute w-full h-full text-white  inset-0 bg-neutral-900 z-50">
      <div className="m-3 max-w-3xl mx-auto">
        <div className="flex justify-between">
          <p className="">Search for movies, TV shows and people:</p>
          <button onClick={props.closeModal}>X</button>
        </div>

        <div className="mt-4 text-5xl">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full bg-neutral-900 border-b-2 py-2 border-white outline-none"
          ></input>
        </div>

        {searchValue.length < 3 ? (
          <TooShortQuery />
        ) : (
          <ModalMovieResults searchValue={searchValue} />
        )}

        {searchValue.length < 3 ? (
          <TooShortQuery />
        ) : (
          <ModalShowsResults searchValue={searchValue} />
        )}
      </div>
    </div>,
    document.getElementById("search-portal")
  );
}
