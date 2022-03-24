import MoviePoster from "../../../main/PopularMoviesList/MoviePoster/MoviePoster";
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

      setMoviesData(jsonResults.results);
    };

    fetchMulti();
  }, [props.searchValue]);

  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex flex-col items-center border-b border-secondary w-full">
        <h3>Movies</h3>
        {moviesData.length < 1 ? (
          <ModalNoResults />
        ) : (
          <div className="flex w-full flex-wrap justify-center">
            {moviesData.map((movie, i) => {
              if (i < 5) {
                if (!movie.poster_path) {
                  i--;
                } else {
                  return (
                    <div className="w-32 m-2" key={movie.id.toString()}>
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
        )}
        <div className=" text-sm">
          <Link to={`/results/${props.searchValue}`}>
            <button className="border m-2 px-4 py-1">Show more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
