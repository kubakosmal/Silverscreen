import MoviePoster from "../../Collections/PopularMoviesList/MoviePoster/MoviePoster";

import * as constants from "../../../../constants";
import { Link } from "react-router-dom";

export default function Recommendations(props) {
  return (
    <div>
      <div className="flex items-center mb-2">
        <h3 className="text-secondary text-md font-bold font-lato whitespace-nowrap">
          YOU MAY ALSO LIKE
        </h3>
        <div className="w-full h-1 ml-2 rounded-full bg-secondary"></div>
      </div>

      <div className="py-2 relative flex justify-around flex-wrap gap-y-4  bg-neutral-900 rounded-lg">
        {props.productions.map((prod, i) => {
          if (prod.poster_path && i < 4) {
            return (
              <div className="relative border-neutral-800 border-2 overflow-hidden rounded-md hover:border-secondary transition-all duration-200">
                <div className="relative" key={prod.id}>
                  <Link to={`/movies/${prod.id}`}>
                    <div className="w-40 lg:w-36 cursor-pointer">
                      <img
                        className="rounded-md hover:scale-110 transition-all duration-200"
                        src={`${constants.IMAGES_BASE_PATH}w342${prod.poster_path}`}
                      ></img>
                    </div>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
