import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as constants from "../../../../constants";

export default function Cast(props) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div className="my-8 flex flex-col">
      <div className="flex items-center mb-2">
        <h3 className="text-pink-600 text-md font-bold font-lato whitespace-nowrap">
          TOP CAST
        </h3>
        <div className="w-full h-1 ml-2 rounded-full bg-pink-600"></div>
      </div>
      <div className="relative">
        <div className="absolute bg-black inset-0 blur-sm rounded-lg"></div>
        <ul className="relative bg-neutral-900 rounded-lg grid grid-cols-1 md:grid-cols-2">
          {props.actors.map((actor, i) => {
            if (i < (screenSize < 500 ? 3 : 6)) {
              if (actor.profile_path) {
                return (
                  <li
                    key={actor.id}
                    className="odd:bg-slate-1000 lg:third:bg-neutral-900 rounded-lg lg:first:bg-slate-1000 lg:fourth:bg-slate-1000 lg:fifth:bg-slate-1000"
                  >
                    <Link to={`/person/${actor.id}`}>
                      <div className="flex items-center py-4">
                        <div className="items-center w-full   flex p-2 px-4">
                          <img
                            className="object-cover w-20 h-20  rounded-full "
                            src={`${constants.IMAGES_BASE_PATH}w500${actor.profile_path}`}
                          ></img>
                          <div className="ml-4 text-gray-300 flex flex-col font-lato">
                            <p className="text-gray-100 text-md lg:text-lg font-bold">
                              {actor.name}
                            </p>

                            <p className="text-xs lg:text-sm">
                              {actor.character}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              } else {
                i--;
              }
            }
          })}
        </ul>
      </div>

      <div className="text-secondary mt-2 font-bold font-lato self-end">
        <Link to={`/cast/${props.prodId}/movie`}>
          <h3>Show full cast</h3>
        </Link>
      </div>
    </div>
  );
}
