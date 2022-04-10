import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as constants from "../../../../constants";

export default function Cast(props) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div className="mt-8 flex flex-col">
      <div className="flex items-center mb-2">
        <h3 className="text-secondary text-md font-bold font-lato whitespace-nowrap">
          TOP CAST
        </h3>
        <div className="w-full h-1 ml-2 rounded-full bg-secondary"></div>
      </div>
      <div className="relative rounded-lg">
        <div className="absolute bg-black inset-0 blur-sm rounded-lg"></div>
        <ul className="relative bg-neutral-900 rounded-lg grid grid-cols-1 md:grid-cols-2">
          {props.actors.map((actor, i) => {
            if (i < (screenSize < 500 ? 3 : 6)) {
              if (actor.profile_path) {
                return (
                  <li
                    key={actor.id}
                    className="odd:bg-slate-1000 group lg:third:bg-neutral-900 rounded-lg lg:first:bg-slate-1000 lg:fourth:bg-slate-1000 lg:fifth:bg-slate-1000"
                  >
                    <Link to={`/person/${actor.id}`}>
                      <div className="flex items-center py-4">
                        <div className="items-center w-full flex p-2 px-4">
                          <div className="w-20 h-20 overflow-hidden border-2 border-transparent group-hover:border-secondary transition-all duration-200 rounded-full">
                            <img
                              className="object-cover w-20 h-20  rounded-full "
                              src={`${constants.IMAGES_BASE_PATH}w342${actor.profile_path}`}
                            ></img>
                          </div>

                          <div className="ml-4 text-gray-300 flex flex-col font-lato">
                            <p className="text-gray-100 text-md lg:text-lg font-bold group-hover:text-secondary transition-all duration-200">
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
        <Link to={`/cast/${props.prodId}/${props.type}`}>
          <h3 className="hover:underline">Show full cast</h3>
        </Link>
      </div>
    </div>
  );
}
