import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { LoggedContext } from "../../../Context/Context";
import { useContext, useState, useEffect } from "react";
import * as constants from "../../../../constants";

export default function Indicators(props) {
  const authContext = useContext(LoggedContext);
  const typeOfProduction = props.type;
  const id = props.prodId;

  const [isInFavorites, setIsInFavorites] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const [favProductions, setFavProductions] = useState([]);
  const [productionsWatchlist, setProductionsWatchlist] = useState([]);

  useEffect(() => {
    const fetchList = async (type, listToFetch, stateToUpdate) => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}account/${authContext.userId}/${listToFetch}/${type}?api_key=${constants.API_KEY}&session_id=${authContext.sessionId}`
      );
      const jsonData = await data.json();

      console.log(jsonData.results);
      stateToUpdate(jsonData.results);
    };

    if (authContext.isLogged) {
      fetchList(typeOfProduction, "favorite", setFavProductions);
      fetchList(typeOfProduction, "watchlist", setProductionsWatchlist);
    }
  }, [id, props.prodId]);

  useEffect(() => {
    for (let prod of favProductions) {
      if (prod.id == id) {
        setIsInFavorites(true);
      }
    }

    for (let prod of productionsWatchlist) {
      if (prod.id == id) {
        setIsInWatchlist(true);
      }
    }
  }, [favProductions, productionsWatchlist, id, props.prodId]);

  const toggleFavorites = async (addOrDelete, type, stateToUpdate) => {
    const toAdd =
      type == "favorite"
        ? {
            media_type: `${typeOfProduction == "movies" ? "movie" : "tv"}`,
            media_id: id,
            favorite: addOrDelete,
          }
        : {
            media_type: `${typeOfProduction == "movies" ? "movie" : "tv"}`,
            media_id: id,
            watchlist: addOrDelete,
          };

    const response = await fetch(
      `${constants.TMDB_BASE_PATH}account/${authContext.userId}/${type}?api_key=${constants.API_KEY}&session_id=${authContext.sessionId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toAdd),
      }
    );

    const jsonResponse = await response.json();
    if (jsonResponse.success) {
      stateToUpdate(addOrDelete);
    }
    console.log(jsonResponse);
  };

  return (
    <div className="flex p-4 font-ibm justify-center text-gray-300">
      <div className="text-xs flex flex-col items-center mx-4">
        <div
          className={`flex items-center justify-center w-10 h-10 border-2 ${
            isInFavorites ? "border-pink-600" : "border-gray-200"
          } cursor-pointer hover:scale-105 transition duration-300  rounded-full p-2`}
          onClick={() =>
            toggleFavorites(!isInFavorites, "favorite", setIsInFavorites)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 transition duration-200 ${
              isInFavorites ? "text-pink-600" : "text-white"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="text-xs flex flex-col items-center mx-4">
        <div
          className={`flex items-center justify-center w-10 h-10 border-2 ${
            isInWatchlist ? "border-crayola" : "border-gray-200"
          } cursor-pointer hover:scale-105 transition duration-300  rounded-full p-2`}
          onClick={() =>
            toggleFavorites(!isInWatchlist, "watchlist", setIsInWatchlist)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 transition duration-200 ${
              isInWatchlist ? "text-crayola" : "text-white"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
