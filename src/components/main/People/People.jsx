import Header from "../../header/Header";
import { useEffect, useState } from "react";
import * as constants from "../../../constants";
import PeoplePerson from "./PeoplePerson/PeoplePerson";

export default function People() {
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}person/popular?api_key=${constants.API_KEY}&page=1`
      );
      const jsonData = await data.json();

      const data2 = await fetch(
        `${constants.TMDB_BASE_PATH}person/popular?api_key=${constants.API_KEY}&page=2`
      );
      const jsonData2 = await data2.json();

      setPopularPeople(jsonData.results.concat(jsonData2.results));
    };

    fetchPeople();
  }, []);
  return (
    <div>
      <Header noBackdrop={true}></Header>
      <div className="mt-5 mb-5 mx-4 lg:mx-auto max-w-4/5 text-white">
        <div className="self-start flex w-full items-center mb-4">
          <h3 className="text-lg font-bold font-lato whitespace-nowrap text-crayola">
            POPULAR PEOPLE
          </h3>
          <div className="w-full h-2 ml-2 bg-crayola rounded-full"></div>
        </div>
        <div className="flex flex-wrap gap-5 lg:gap-7 justify-between">
          {popularPeople.map((person, i) => {
            if (i < 30) {
              return (
                <PeoplePerson
                  posterPath={`${constants.IMAGES_BASE_PATH}w342${person.profile_path}`}
                  name={person.name}
                  popularity={person.popularity}
                  id={person.id}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
