import { Link } from "react-router-dom";

import { IoIosArrowDropup } from "react-icons/io";
import { IconContext } from "react-icons/lib";

export default function PeoplePerson(props) {
  return (
    <Link to={`/person/${props.id}`}>
      <div>
        <div className="relative w-40 rounded-md">
          <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
          <div className="relative border-2 rounded-md border-neutral-700">
            <img className="rounded-md" src={props.posterPath}></img>
            <div className="absolute bg-opacity-70 justify-center top-1 left-1 bg-black px-2 text-xs rounded-lg p-1 flex items-center">
              <IconContext.Provider value={{ color: "#FFE66D" }}>
                <IoIosArrowDropup className="w-4 h-4" />
              </IconContext.Provider>
              <p className="font-ibm font-bold text-xs">
                {Math.floor(props.popularity)}
              </p>
            </div>
          </div>
        </div>

        <p className="font-bold font-lato">{props.name}</p>
      </div>
    </Link>
  );
}
