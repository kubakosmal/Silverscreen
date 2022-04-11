import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as constants from "../../../../../constants";
import Review from "../Review/Review";
import Header from "../../../../header/Header";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [movieData, setMovieData] = useState({});
  const prodId = useParams().reviewProdId;
  const type = useLocation().pathname.split("/")[3];

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}/${type}/${prodId}/reviews?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();
      setReviews(jsonData.results);
    };

    const fetchMovieData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}/${type}/${prodId}?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();

      setMovieData(jsonData);
    };

    fetchMovieData();
    fetchReviews();
  }, []);
  return (
    <div className="">
      <Header noBackdrop={true}></Header>
      <div className="mx-4 lg:mx-auto max-w-4/5 my-5">
        <Link to={`/${type == "movie" ? "movies" : "tvshows"}/${prodId}`}>
          <div className="flex items-center">
            <IconContext.Provider value={{ color: "white" }}>
              <MdKeyboardArrowLeft className="w-7 h-7"></MdKeyboardArrowLeft>
            </IconContext.Provider>

            <h3 className="text-white text-md">
              Return to{" "}
              <span className="text-secondary text-lg underline">
                {movieData.title ? movieData.title : movieData.name}
              </span>
            </h3>
          </div>
        </Link>

        <div className="relative rounded-lg mt-5">
          <div className="absolute bg-black inset-0 blur-sm rounded-lg"></div>
          <ul className="relative rounded-lg bg-neutral-900">
            {reviews.map((review, i) => {
              let avatarPath = "";
              let hasAvatar = false;

              return (
                <li className="odd:bg-slate-1000 rounded-lg">
                  <Review
                    author={review.author}
                    avatarPath={avatarPath}
                    content={review.content}
                    rating={review.author_details.rating}
                    createdAt={review.created_at.slice(0, 10)}
                    url={review.url}
                    hasAvatar={hasAvatar}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
