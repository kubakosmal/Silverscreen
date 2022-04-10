import { Link } from "react-router-dom";

import { IoIosArrowDropup } from "react-icons/io";
import { IconContext } from "react-icons/lib";

export default function PeoplePerson(props) {
  return (
    <Link to={`/person/${props.id}`}>
      <div className="relative">
        <div className="relative w-40 rounded-md overflow-hidden border-neutral-700 hover:border-secondary border-2">
          <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
          <div className="relative rounded-md">
            <img
              className="rounded-md hover:scale-110 transition-all duration-200"
              src={props.posterPath}
            ></img>
          </div>
        </div>

        <p className="font-bold font-lato truncate">
          {props.name.length > 16
            ? props.name.slice(0, 16) + "..."
            : props.name}
        </p>
        <div className="absolute bg-opacity-70 justify-center top-1 left-1 bg-black px-2 text-xs rounded-lg p-1 flex items-center">
          <IconContext.Provider value={{ color: "#FFE66D" }}>
            <IoIosArrowDropup className="w-4 h-4" />
          </IconContext.Provider>
          <p className="font-ibm font-bold text-xs">
            {Math.floor(props.popularity)}
          </p>
        </div>
      </div>
    </Link>
  );
}
