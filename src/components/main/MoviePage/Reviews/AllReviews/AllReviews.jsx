import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as constants from "../../../../../constants";
import Review from "../Review/Review";
import Header from "../../../../header/Header";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

export default function AllReviews(props) {
  const [reviews, setReviews] = useState([]);
  const [movieData, setMovieData] = useState({});
  const movieId = useParams().reviewMovieId;
  console.log(movieId);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${movieId}/reviews?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();
      setReviews(jsonData.results);
    };

    const fetchMovieData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${movieId}?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();
      console.log(jsonData);
      setMovieData(jsonData);
    };

    fetchMovieData();
    fetchReviews();
  }, []);
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <Header></Header>
      <div className="mx-4">
        <Link to={`/movies/${movieId}`}>
          <div className="flex items-center">
            <IconContext.Provider value={{ color: "white" }}>
              <MdKeyboardArrowLeft className="w-7 h-7"></MdKeyboardArrowLeft>
            </IconContext.Provider>

            <h3 className="text-white text-md">
              Return to{" "}
              <span className="text-secondary text-lg underline">
                {movieData.title}
              </span>
            </h3>
          </div>
        </Link>

        <div>
          {reviews.map((review, i) => {
            let avatarPath = "";
            let hasAvatar = false;
            if (review.author_details.avatar_path) {
              avatarPath = review.author_details.avatar_path.substring(1);
              hasAvatar = true;
            }
            return (
              <Review
                author={review.author}
                avatarPath={avatarPath}
                content={review.content}
                rating={review.author_details.rating}
                createdAt={review.created_at.slice(0, 10)}
                url={review.url}
                hasAvatar={hasAvatar}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
