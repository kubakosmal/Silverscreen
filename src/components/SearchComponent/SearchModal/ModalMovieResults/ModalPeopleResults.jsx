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
    <div className="flex flex-col items-center my-4 font-lato w-1/2">
      {peopleData.length < 1 ? (
        false
      ) : (
        <div className="flex flex-col w-full">
          <h3 className="text-2xl font-bold">People</h3>
          {peopleData.length < 1 ? (
            <ModalNoResults />
          ) : (
            <div className="flex w-full flex-wrap">
              {peopleData.map((person, i) => {
                if (i < 3) {
                  return (
                    <div
                      className="w-28 border-2 border-transparent hover:border-secondary p-1 rounded-md"
                      key={person.id.toString()}
                      onClick={props.closeModal}
                    >
                      <Link to={`/person/${person.id}`}>
                        <img
                          className="rounded-md"
                          src={`${constants.IMAGES_BASE_PATH}w500${person.profile_path}`}
                        ></img>
                        <p className="truncate text-sm mt-1 text-gray-300">
                          {person.name}
                        </p>
                      </Link>
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
      )}
    </div>
  );
}
