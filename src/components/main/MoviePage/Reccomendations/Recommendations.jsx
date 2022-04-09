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
      <div className="relative rounded-lg">
        <div className="absolute bg-black blur-sm inset-0 rounded-lg"></div>
        <div className="py-2 relative flex justify-around flex-wrap gap-y-4  bg-neutral-900 rounded-lg">
          {props.productions.map((prod, i) => {
            if (prod.poster_path && i < 4) {
              return (
                <div className="relative">
                  <div className="absolute bg-black inset-0 blur-sm rounded-lg"></div>
                  <div className="relative" key={prod.id}>
                    <Link to={`/movies/${prod.id}`}>
                      <div className="w-40 lg:w-36 cursor-pointer">
                        <img
                          className="rounded-md border-2 border-neutral-800"
                          src={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
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
    </div>
  );
}
