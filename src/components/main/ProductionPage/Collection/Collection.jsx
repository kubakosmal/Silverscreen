import { useState, useEffect } from "react";
import * as constants from "../../../../constants";
import { Link } from "react-router-dom";

export default function Collection({ backdropPath, title, id, prodId }) {
  const [collectionDetails, setCollectionDetails] = useState({});
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}collection/${id}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      setCollectionDetails(jsonData);
      setProductions(jsonData.parts);
    };

    fetchDetails();
  }, []);
  return (
    <div className="mb-5 lg:mb-10 flex flex-col">
      <div className="flex items-center mb-2">
        <h3 className="text-secondary text-md font-bold font-lato whitespace-nowrap">
          BELONGS TO
        </h3>
        <div className="w-full h-1 ml-2 rounded-full bg-secondary"></div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black rounded-lg blur-sm"></div>
        <div className="relative h-40 lg:h-64 bg-neutral-900 rounded-lg">
          <div className="absolute bg-gradient-to-tr from-neutral to-black inset-0 rounded-lg"></div>
          {backdropPath ? (
            <img
              className="w-full h-40 lg:h-64 object-cover rounded-lg opacity-40"
              src={backdropPath}
            />
          ) : (
            false
          )}

          <div className="absolute inset-x-0 bottom-0 lg:bottom-5 z-30">
            <h3 className="text-crayola text-xl lg:text-4xl px-6 font-bold font-lato drop-shadow-2xl">
              {title}
            </h3>
            <div className="mt-2 px-6 py-3 text-white font-bold flex flex-wrap items-center">
              <h4 className="text-sm lg:text-xl text-crayola">
                Includes:&nbsp;
              </h4>
              {productions.map((prod, i) => {
                if (i < 3) {
                  return (
                    <div>
                      <p className="text-sm lg:text-lg">
                        {prod.title}
                        {i == 2 ? false : ","}&nbsp;
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center self-end text-secondary mt-2 mb-2">
        <Link to={`/collection/${id}/${prodId}`}>
          <button className=" font-bold font-lato  py-1 px-2 rounded-md hover:underline">
            Show collection
          </button>
        </Link>
      </div>
    </div>
  );
}
