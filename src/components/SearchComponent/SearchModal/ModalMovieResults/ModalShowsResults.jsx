import { useState, useEffect } from "react";
import * as constants from "../../../../constants";
import ModalNoResults from "./ModalNoResults";
import { Link } from "react-router-dom";

export default function ModalShowsResults(props) {
  const [showsData, setShowsData] = useState([]);

  useEffect(() => {
    const fetchMulti = async () => {
      const results = await fetch(
        `${constants.TMDB_BASE_PATH}search/tv?api_key=${constants.API_KEY}&query=${props.searchValue}`
      );
      const jsonResults = await results.json();

      jsonResults.results = jsonResults.results.filter(
        (show) => show.poster_path
      );
      setShowsData(jsonResults.results);
    };

    fetchMulti();
  }, [props.searchValue]);

  return (
    <>
      {showsData.length < 1 ? (
        false
      ) : (
        <div className="flex flex-col items-center my-4 font-lato w-1/2">
          <div className="flex flex-col w-full">
            <h3 className="text-2xl font-bold">TV Shows</h3>

            <div className="flex w-full flex-wrap">
              {showsData.map((show, i) => {
                if (i < 3) {
                  return (
                    <div onClick={() => props.closeModal()}>
                      <Link to={`/tvshows/${show.id}`}>
                        <div
                          className="w-20 lg:w-28 p-1 rounded-md border-2 border-transparent hover:border-secondary"
                          key={show.id.toString()}
                        >
                          <img
                            className="rounded-md"
                            src={
                              constants.IMAGES_BASE_PATH +
                              "w500" +
                              show.poster_path
                            }
                          />
                          <p className="truncate text-sm text-gray-300 mt-1">
                            {show.name}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>

            <div className=" text-sm">
              <button className="border m-2 px-4 py-1">Show more</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
