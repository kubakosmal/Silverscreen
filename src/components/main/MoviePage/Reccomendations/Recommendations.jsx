import MoviePoster from "../../Collections/PopularMoviesList/MoviePoster/MoviePoster";
import Atropos from "atropos/react";
import * as constants from "../../../../constants";
import { Link } from "react-router-dom";

export default function Recommendations(props) {
  return (
    <div>
      <h3 className="text-gray-200 font-lato text-xl font-bold">
        You may also like
      </h3>
      <div className="flex flex-wrap gap-5 mt-5">
        {props.productions.map((prod, i) => {
          if (prod.poster_path && i < 4) {
            return (
              <div key={prod.id}>
                <Link to={`/movies/${prod.id}`}>
                  <div className="w-40 cursor-pointer">
                    <Atropos className="rounded-md">
                      <img
                        className="rounded-md"
                        src={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
                      ></img>
                    </Atropos>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
