import ModalNoResults from "./ModalNoResults";
import * as constants from "../../../../constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ModalPeopleResults(props) {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const fetchMulti = async () => {
      const results = await fetch(
        `${constants.TMDB_BASE_PATH}search/person?api_key=${constants.API_KEY}&query=${props.searchValue}`
      );
      const jsonResults = await results.json();

      jsonResults.results = jsonResults.results.filter(
        (person) => person.profile_path
      );

      setPeopleData(jsonResults.results);
    };

    fetchMulti();
  }, [props.searchValue]);
  return (
    <div className="flex flex-col items-center my-4 font-lato">
      {peopleData.length < 1 ? (
        false
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <h3 className="text-md font-bold text-secondary">PEOPLE</h3>
            <div className="ml-2 bg-secondary w-full h-1 rounded-full"></div>
          </div>

          {peopleData.length < 1 ? (
            <ModalNoResults />
          ) : (
            <div
              className={`flex w-full flex-wrap ${
                peopleData.length >= 3 ? "justify-between" : "gap-4"
              } mt-2`}
            >
              {peopleData.map((person, i) => {
                if (i < 3) {
                  return (
                    <div
                      className="w-[6.2rem] lg:w-28 border-2 border-transparent rounded-md"
                      key={person.id.toString()}
                      onClick={props.closeModal}
                    >
                      <div className="w-[6.2rem] lg:w-28 overflow-hidden rounded-md border-2 hover:border-secondary transition-all duration-200 border-neutral-700">
                        <Link to={`/person/${person.id}`}>
                          <img
                            className="rounded-md hover:scale-110 transition-all duration-200"
                            src={`${constants.IMAGES_BASE_PATH}w500${person.profile_path}`}
                          ></img>
                        </Link>
                      </div>
                      <p className="truncate text-sm mt-1 text-gray-100 font-bold">
                        {person.name}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
