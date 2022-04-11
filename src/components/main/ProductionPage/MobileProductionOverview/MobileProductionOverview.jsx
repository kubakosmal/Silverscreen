import { AiOutlineEye } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { BiUpvote } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import YearDirector from "./YearDirector";

const MobileProductionOverview = (props) => {
  return (
    <div>
      <div className="filter drop-shadow-2xl flex flex-col items-center text-center text-primary rounded-lg">
        <div className="text-sm sm:text-xl w-full pb-2 text-slate-400">
          <div className="">
            <h2 className="text-xl font-bold mt-2 text-primary leading-7">
              {props.movieName} ({props.releaseDate.slice(0, 4)})
            </h2>
            <p className="text-lg text-gray-200">{props.runtime + " mins"}</p>
          </div>

          <YearDirector
            releaseDate={props.releaseDate}
            directors={props.directors}
            type={props.type}
          />
        </div>
      </div>
    </div>
  );
};
export default MobileProductionOverview;
