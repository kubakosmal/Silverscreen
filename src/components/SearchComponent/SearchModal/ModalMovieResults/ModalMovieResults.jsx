import MoviePoster from "../../../main/Collections/PopularMoviesList/MoviePoster/MoviePoster.jsx";
import * as constants from "../../../../constants";
import { useEffect, useState } from "react";
import ModalNoResults from "./ModalNoResults";
import { Link } from "react-router-dom";

export default function ModalMovieResults(props) {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMulti = async () => {
      const results = await fetch(
        `${constants.TMDB_BASE_PATH}search/movie?api_key=${constants.API_KEY}&query=${props.searchValue}`
      );
      const jsonResults = await results.json();

      jsonResults.results = jsonResults.results.filter(
        (movie) => movie.poster_path
      );
      setMoviesData(jsonResults.results);
    };

    fetchMulti();
  }, [props.searchValue]);

  return (
    <>
      {moviesData.length < 1 ? (
        <ModalNoResults />
      ) : (
        <div className="flex flex-col items-center my-4 font-lato">
          <div className="flex flex-col text-left border-secondary w-full">
            <div className="flex items-center">
              <h3 className="text-md font-bold whitespace-nowrap text-secondary">
                {moviesData.length < 1 ? false : "MOVIES"}
              </h3>
              <div className="ml-2 w-full h-1 bg-secondary rounded-full"></div>
            </div>

            <div
              className={`flex w-full flex-wrap gap-y-4 mt-2 ${
                moviesData.length >= 6 ? "justify-between" : "gap-4"
              }`}
            >
              {moviesData.map((movie, i) => {
                if (i < 6) {
                  if (!movie.poster_path) {
                    i--;
                  } else {
                    return (
                      <div
                        className="w-[6.5rem] lg:w-28"
                        key={movie.id.toString()}
                        onClick={props.closeModal}
                      >
                        <Link to={`/movies/${movie.id}`}>
                          <div
                            className="w-[6.5rem] lg:w-28 overflow-hidden rounded-md border-2 border-neutral-700 transition-all duration-200 hover:border-secondary"
                            key={movie.id.toString()}
                          >
                            <img
                              className="rounded-md hover:scale-110 transition-all duration-200"
                              src={
                                constants.IMAGES_BASE_PATH +
                                "w342" +
                                movie.poster_path
                              }
                            />
                          </div>
                        </Link>
                        <p className="font-bold text-sm truncate lg:text-md text-gray-100 mt-1">
                          {movie.title}
                        </p>
                      </div>
                    );
                  }
                }
              })}
            </div>

            {/*  <div className=" text-sm">
              <Link to={`/results/${props.searchValue}`}>
                <button className="border m-2 px-4 py-1">Show more</button>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
