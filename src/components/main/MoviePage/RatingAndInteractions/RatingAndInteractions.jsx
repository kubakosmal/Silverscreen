import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Rate from "./Rate";
import { LoggedContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function RatingAndInteractions(props) {
  const authContext = useContext(LoggedContext);
  return (
    <div className="relative font-ibm drop-shadow-lg flex flex-col gap-5 items-center justify-around rounded-md py-4 px-2">
      <div className="flex flex-col items-center">
        <p className="font-bold font-lato text-gray-300 text-xs mb-1">
          USER SCORE
        </p>
        <div className="flex items-center ">
          <IconContext.Provider value={{ color: "#FFE66D" }}>
            <AiFillStar className="h-9 w-9"></AiFillStar>
          </IconContext.Provider>

          <p className="font-bold bg-gradient-to-tr from-crayola to-pink-500 bg-clip-text text-transparent text-5xl">
            {props.rating}
            <span className="text-gray-500 text-lg">/10</span>
          </p>
        </div>
      </div>

      {authContext.isLogged ? (
        <Rate type={props.type} prodId={props.prodId} />
      ) : (
        <Link to={"/login"}>
          <div className="mt-2">
            <p className="text-gray-300 text-xs">
              You must be logged to rate this production
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
