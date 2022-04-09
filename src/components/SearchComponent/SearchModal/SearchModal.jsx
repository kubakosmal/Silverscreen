import React from "react";
import reactDom from "react-dom";
import { useEffect, useState } from "react";
import * as constants from "../../../constants";
import MoviePoster from "../../main/Collections/PopularMoviesList/MoviePoster/MoviePoster";
import ModalMovieResults from "./ModalMovieResults/ModalMovieResults";
import ModalShowsResults from "./ModalMovieResults/ModalShowsResults";
import TooShortQuery from "./TooShortQuery";
import ModalPeopleResults from "./ModalMovieResults/ModalPeopleResults";

export default function SearchModal(props) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let rootElement = document.getElementById("root");
    rootElement.style.position = "fixed";

    return () => {
      rootElement.style.position = "";
    };
  });

  return reactDom.createPortal(
    <div className=" absolute w-full h-100 text-white inset-0 bg-neutral-900 z-50 font-lato">
      <div className="mt-5">
        <div className="m-3 max-w-3xl mx-4 lg:mx-auto">
          <div className="flex justify-between items-center text-white">
            <p className="font-ibm text-md lg:text-xl">
              Search for movies, TV shows and people:
            </p>
            <button onClick={props.closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-crayola"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 text-4xl lg:text-5xl">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full bg-neutral-900 border-b-2 py-2 border-crayola outline-none text-white"
            ></input>
          </div>

          {searchValue.length < 3 ? (
            <TooShortQuery />
          ) : (
            <div>
              <ModalMovieResults
                closeModal={props.closeModal}
                searchValue={searchValue}
              />
              <div className="flex flex-wrap">
                <ModalShowsResults
                  closeModal={props.closeModal}
                  searchValue={searchValue}
                />
                <ModalPeopleResults
                  closeModal={props.closeModal}
                  searchValue={searchValue}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("search-portal")
  );
}
