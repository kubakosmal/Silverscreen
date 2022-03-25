import MoviePoster from "../../../main/Collections/PopularMoviesList/MoviePoster/MoviePoster.jsx";
import * as constants from "../../../../constants";
import { useEffect, useState } from "react";
import ModalNoResults from "./ModalNoResults";
import { Link, Outlet } from "react-router-dom";

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
            <h3 className="text-2xl font-bold">
              {moviesData.length < 1 ? false : "Movies"}
            </h3>

            <div className="flex w-full flex-wrap">
              {moviesData.map((movie, i) => {
                if (i < 6) {
                  if (!movie.poster_path) {
                    i--;
                  } else {
                    return (
                      <div
                        className="w-28 lg:w-32"
                        key={movie.id.toString()}
                        onClick={props.closeModal}
                      >
                        <MoviePoster
                          posterImageUrl={
                            constants.IMAGES_BASE_PATH +
                            "w500" +
                            movie.poster_path
                          }
                          movieTitle={movie.title}
                          movieId={movie.id}
                          key={movie.id}
                          type={"movies"}
                          origin={"modal"}
                        />
                      </div>
                    );
                  }
                }
              })}
            </div>

            <div className=" text-sm">
              <Link to={`/results/${props.searchValue}`}>
                <button className="border m-2 px-4 py-1">Show more</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
