import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

export default function PersonProductionInfo(props) {
  return (
    <div className="border-b-2 border-neutral-800 my-2 flex items-center p-1">
      <div className="flex items-center">
        <p className="">{props.releaseDate.slice(0, 4)}</p>
        <p className="font-bold text-xl mx-2">·</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="">
          <Link to={`/movies/${props.id}`}>
            <p className="underline hover:opacity-90 font-ibm text-crayola text-md cursor-pointer">
              {props.title}
            </p>
          </Link>
        </div>

        <div className=" border-crayola rounded-lg p-1 flex items-center">
          <IconContext.Provider value={{ color: "#FFE66D" }}>
            <AiFillStar></AiFillStar>
          </IconContext.Provider>
          <p className="font-ibm font-bold">
            {props.voteAverage != 0 ? props.voteAverage.toFixed(1) : "n/a"}
          </p>
        </div>
      </div>
    </div>
  );
}
