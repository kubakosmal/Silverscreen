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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  ratingValue % 2 == 0
                    ? " -ml-3 rotate-180 -scale-y-100"
                    : "-mr-3"
                } ${
                  ratingValue <= (hover || rating)
                    ? "text-crayola"
                    : "text-white"
                }`}
                value={ratingValue}
                viewBox="0 0 20 20"
                fill="currentColor"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              >
                <path d="M 9.049,2.927 C 9.1985626,2.4678429 9.5974148,2.2375949 9.9968701,2.2362559 l -5.9e-6,11.8199721 C 9.7915851,14.056767 9.5864369,14.120358 9.412,14.247 l -2.8,2.034 C 5.828,16.851 4.774,16.084 5.073,15.163 l 1.07,-3.292 C 6.276704,11.45883 6.1297413,11.007444 5.779,10.753 L 2.98,8.72 C 2.197,8.15 2.6,6.91 3.568,6.91 H 7.029 C 7.4619424,6.9101141 7.8457879,6.6316142 7.98,6.22 L 9.05,2.928 Z" />
              </svg> */}
            </label>
          );
        })}
      </div>
    </div>
  );
}
