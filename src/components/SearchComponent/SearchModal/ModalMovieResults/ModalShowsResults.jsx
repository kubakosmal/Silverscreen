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
        <div className="flex flex-col items-center my-4 font-lato">
          <div className="flex flex-col w-full">
            <div className="flex items-center">
              <h3 className="text-md font-bold text-secondary whitespace-nowrap">
                TV SHOWS
              </h3>
              <div className="ml-2 w-full rounded-full h-1 bg-secondary"></div>
            </div>

            <div
              className={`flex w-full flex-wrap ${
                showsData.length >= 3 ? "justify-between" : "gap-4"
              } mt-2`}
            >
              {showsData.map((show, i) => {
                if (i < 3) {
                  return (
                    <div
                      className="w-[6.2rem] lg:w-28"
                      onClick={() => props.closeModal()}
                    >
                      <Link to={`/tvshows/${show.id}`}>
                        <div
                          className="w-[6.5rem] lg:w-28 overflow-hidden rounded-md border-2 border-neutral-700 transition-all duration-200 hover:border-secondary"
                          key={show.id.toString()}
                        >
                          <img
                            className="rounded-md hover:scale-110 transition-all duration-200"
                            src={
                              constants.IMAGES_BASE_PATH +
                              "w500" +
                              show.poster_path
                            }
                          />
                        </div>
                      </Link>
                      <p className="truncate text-sm text-gray-100 font-bold mt-1">
                        {show.name}
                      </p>
                    </div>
                  );
                }
              })}
            </div>

            {/* <div className=" text-sm">
              <button className="border m-2 px-4 py-1">Show more</button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
