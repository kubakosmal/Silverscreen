import { AiOutlineEye } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { BiUpvote } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import YearDirector from "./YearDirector";

const MobileMovieOverview = (props) => {
  console.log(props.directors);
  return (
    <div>
      <div className="filter drop-shadow-2xl py-4 flex flex-col items-center text-center text-primary  rounded-lg">
        <div className="text-sm sm:text-xl border-b-2 border-zinc-700 w-full pb-2 text-slate-400">
          <div className="mb-2">
            <h2 className="text-xl font-bold mt-2 text-primary leading-7">
              {props.movieName}
            </h2>
            <p>{props.runtime + " mins"}</p>
          </div>

          <YearDirector
            releaseDate={props.releaseDate}
            directors={props.directors}
          />
        </div>
      </div>
    </div>
  );
};
export default MobileMovieOverview;
