import * as constants from "../../../../../constants";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useState } from "react/cjs/react.development";
import { format } from "prettier";

export default function Review(props) {
  const [isReadMore, setIsReadMore] = useState(false);
  console.log(props.avatarPath);
  return (
    <div className="text-gray-300 flex flex-col my-4 border-b-2 border border-zinc-800 bg-zinc-900 px-3 py-4 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            {props.hasAvatar ? (
              <img className="rounded-full" src={props.avatarPath}></img>
            ) : (
              <IconContext.Provider value={{ color: "black" }}>
                <AiOutlineUser className="w-7 h-7"></AiOutlineUser>
              </IconContext.Provider>
            )}
          </div>

          <div className="px-2">
            <div className="flex items-center">
              <div className="text-gray-400 mr-1 text-sm">
                <p>Review by</p>
              </div>

              <div className="font-bold text-md">
                <p>{props.author}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <IconContext.Provider value={{ color: "#FFE66D" }}>
            <AiOutlineStar className="w-7 h-7"></AiOutlineStar>
          </IconContext.Provider>
          <p>{props.rating ? props.rating : "N/A"}</p>
        </div>
      </div>

      <div className="text-sm my-2 max-w-3/4">
        {isReadMore || props.content.length <= 130
          ? props.content
          : props.content.slice(0, 130) + "..."}
        {props.content.length > 130 ? (
          <button
            className="text-secondary"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {" "}
            {isReadMore ? "-Show Less" : "Show More"}{" "}
          </button>
        ) : (
          false
        )}
      </div>
    </div>
  );
}
