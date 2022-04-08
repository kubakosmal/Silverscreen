import { useState, useEffect } from "react";
import * as constants from "../../../../constants";

export default function Collection({ backdropPath, title, id }) {
  const [collectionDetails, setCollectionDetails] = useState({});
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}collection/${id}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      console.log(jsonData);
      setCollectionDetails(jsonData);
      setProductions(jsonData.parts);
    };

    fetchDetails();
  }, []);
  return (
    <div className="mb-5 lg:mb-10">
      <div className="flex items-center mb-2">
        <h3 className="text-secondary text-md font-bold font-lato whitespace-nowrap">
          BELONGS TO
        </h3>
        <div className="w-full h-1 ml-2 rounded-full bg-secondary"></div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black rounded-lg blur-sm"></div>
        <div className="relative">
          <div className="absolute bg-gradient-to-tr from-blue-900 to-black inset-0 rounded-lg"></div>
          <img
            className="w-full h-40 lg:h-64 object-cover rounded-lg opacity-50"
            src={backdropPath}
          />
          <div className="absolute inset-x-0 top-0 left-0 z-30">
            <h3 className="text-white text-xl lg:text-3xl p-2 font-bold font-lato drop-shadow-2xl">
              {title}
            </h3>
            <div className="mt-2 p-2 text-white font-bold flex flex-wrap items-center">
              <h4 className="text-lg">Includes</h4>
              {productions.map((prod, i) => {
                if (i < 3) {
                  return (
                    <div>
                      <p className="text-lg">{prod.title},&nbsp;</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
