import TMDBLogo from "./tmdb-short-logo.svg";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { MdOutlineShowChart } from "react-icons/md";
import { RiArrowUpCircleLine } from "react-icons/ri";

export default function RatingAndInteractions(props) {
  return (
    <div className="lg:mt-5 font-ibm drop-shadow-lg border-red-pigment flex flex-col items-center justify-around">
      <div className="flex flex-col items-center">
        <p className="font-bold font-lato text-gray-300 text-xs mb-1">
          USER SCORE
        </p>
        <div className="flex items-center ">
          <IconContext.Provider value={{ color: "#FFE66D" }}>
            <AiFillStar className="h-9 w-9"></AiFillStar>
          </IconContext.Provider>

          <p className="font-bold text-gray-200 text-5xl">
            {props.rating}
            <span className="text-gray-500 text-lg">/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-gray-300 text-xs">Have you seen this movie?</p>
        <div className="bg-neutral-800 border border-black rounded-md text-center text-white">
          Rating here
        </div>
      </div>
    </div>
  );
}
