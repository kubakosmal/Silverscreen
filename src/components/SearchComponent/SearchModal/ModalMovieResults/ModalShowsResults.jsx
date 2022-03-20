import { useState, useEffect } from "react";
import MoviePoster from "../../../main/PopularMoviesList/MoviePoster/MoviePoster";
import * as constants from "../../../../constants";
import ModalNoResults from "./ModalNoResults";

export default function ModalShowsResults(props) {
  const [showsData, setShowsData] = useState([]);

  useEffect(() => {
    const fetchMulti = async () => {
      const results = await fetch(
        `${constants.TMDB_BASE_PATH}search/tv?api_key=${constants.API_KEY}&query=${props.searchValue}`
      );
      const jsonResults = await results.json();
      console.log(jsonResults.results);

      setShowsData(jsonResults.results);
    };

    fetchMulti();
  }, [props.searchValue]);

  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex flex-col items-center border-b border-secondary w-full">
        <h3>TV Shows</h3>
        {showsData.length < 1 ? (
          <ModalNoResults />
        ) : (
          <div className="flex w-full flex-wrap justify-center">
            {showsData.map((show, i) => {
              if (i < 5) {
                return (
                  <div className="w-32 m-2" key={show.id.toString()}>
                    <MoviePoster
                      posterImageUrl={
                        constants.IMAGES_BASE_PATH + "w500" + show.poster_path
                      }
                      movieTitle={show.name}
                      movieId={show.id}
                      key={show.id}
                      type={"shows"}
                      origin={"modal"}
                    />
                  </div>
                );
              }
            })}
          </div>
        )}
        <div className=" text-sm">
          <button className="border m-2 px-4 py-1">Show more</button>
        </div>
      </div>
    </div>
  );
}
