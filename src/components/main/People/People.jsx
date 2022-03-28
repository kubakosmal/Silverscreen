import Header from "../../header/Header";
import { useEffect, useState } from "react";
import * as constants from "../../../constants";
import PeoplePerson from "./PeoplePerson/PeoplePerson";

export default function People() {
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}person/popular?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      setPopularPeople(jsonData.results);
    };

    fetchPeople();
  }, []);
  return (
    <div>
      <Header noBackdrop={true}></Header>
      <div className="mt-5 mb-5 mx-4 lg:mx-auto max-w-4/5 text-white">
        <h1>PEOPLE</h1>
        <div className="flex flex-wrap gap-5 lg:gap-7 justify-between">
          {popularPeople.map((person) => {
            return (
              <PeoplePerson
                posterPath={`${constants.IMAGES_BASE_PATH}w500${person.profile_path}`}
                name={person.name}
                popularity={person.popularity}
                id={person.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
