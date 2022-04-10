import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Rate from "./Rate";
import { LoggedContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function RatingAndInteractions(props) {
  const authContext = useContext(LoggedContext);
  return (
    <div className="relative font-ibm drop-shadow-lg bg-slate-1000 flex flex-col items-center justify-around rounded-md">
      <div className="flex gap-x-5 lg:gap-x-0 lg:flex-col items-center p-4">
        <p className="font-bold font-lato text-white text-xl lg:text-sm mb-2">
          USER SCORE
        </p>
        <div className="flex items-center ">
          <IconContext.Provider value={{ color: "#FFE66D" }}>
            <AiFillStar className="h-9 w-9"></AiFillStar>
          </IconContext.Provider>

          <p className="font-bold bg-gradient-to-tr from-crayola to-pink-500 bg-clip-text text-transparent text-6xl">
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
            <p className="text-gray-100 text-md font-lato p-2 pt-0 text-center">
              <span className="text-pink-500 hover:underline font-bold">
                Log In
              </span>{" "}
              to Rate and Add Productions to Lists
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
