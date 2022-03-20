import { Link } from "react-router-dom";
import * as constants from "../../../../constants";

export default function Cast(props) {
  return (
    <div className="my-8 flex flex-col">
      <h3 className="text-gray-200 font-bold mb-2">Top cast</h3>
      <div className="grid grid-cols-2 ">
        {props.actors.map((actor, i) => {
          if (i < 6) {
            return (
              <Link to={`/person/${actor.id}`}>
                <div className="flex items-center py-4">
                  <div className="items-center border-b-2 w-full border-zinc-800 flex p-2">
                    <img
                      className="object-cover w-12 h-12 lg:w-20 lg:h-20  rounded-full "
                      src={`${constants.IMAGES_BASE_PATH}w500${actor.profile_path}`}
                    ></img>
                    <div className="ml-2 text-gray-400 flex flex-col ">
                      <p className="text-gray-300 font-sora text-xs lg:text-sm font-bold">
                        {actor.name}
                      </p>

                      <p className="text-xs">{actor.character}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <h3 className="text-secondary self-end text-sm lg:text-md">
        Show full cast
      </h3>
    </div>
  );
}
