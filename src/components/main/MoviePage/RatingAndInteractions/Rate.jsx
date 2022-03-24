import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LoggedContext } from "../../../Context/Context";
import * as constants from "../../../../constants";

export default function Rate(props) {
  const authContext = useContext(LoggedContext);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [ratedProductions, setRatedProductions] = useState([]);

  useEffect(() => {
    const fetchRated = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}account/${authContext.userId}/rated/${props.type}?api_key=${constants.API_KEY}&session_id=${authContext.sessionId}`
      );

      const jsonData = await data.json();
      console.log(jsonData.results);
      setRatedProductions(jsonData.results);
    };

    if (authContext.isLogged) {
      fetchRated();
    }
  }, []);

  useEffect(() => {
    for (let prod of ratedProductions) {
      if (prod.id == props.prodId) {
        setRating(prod.rating);
      }
    }
  }, [ratedProductions]);

  const postRating = async (rating) => {
    const response = await fetch(
      `${constants.TMDB_BASE_PATH}${props.type == "movies" ? "movie" : "tv"}/${
        props.prodId
      }/rating?api_key=${constants.API_KEY}&session_id=${
        authContext.sessionId
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: rating.toFixed(1),
        }),
      }
    );
  };
  return (
    <div className="text-gray-300 items-center flex flex-col">
      <p className="">
        {rating
          ? `You gave ${rating} ${rating == 1 ? "star" : "stars"}`
          : "Have you seen this movie?"}
      </p>
      <div className="flex">
        {[...Array(10)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label className="cursor-pointer">
              <input
                className="hidden"
                name="rating"
                type="radio"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                  postRating(ratingValue);
                }}
              ></input>
              <FaStar
                className="h-4 w-4"
                color={ratingValue <= (hover || rating) ? "#FFE66D" : "white"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
