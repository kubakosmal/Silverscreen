import * as constants from "../../../../../constants";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useState } from "react";

export default function Review(props) {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className="text-gray-300 flex flex-col p-4 py-6">
      <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
        <div className="flex items-center">
          <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full">
            {props.hasAvatar ? (
              <img className="rounded-full" src={props.avatarPath}></img>
            ) : (
              <IconContext.Provider value={{ color: "black" }}>
                <AiOutlineUser className="w-12 h-12"></AiOutlineUser>
              </IconContext.Provider>
            )}
          </div>

          <div className="px-2">
            <div className="flex items-center">
              <div className="text-gray-400 lg:text-md mr-1">
                <p>Review by</p>
              </div>

              <div className="font-bold lg:text-lg text-gray-100">
                <p>{props.author}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center font-ibm ">
          {props.rating ? (
            <p className="font-bold bg-gradient-to-tr from-crayola to-pink-500 bg-clip-text text-transparent text-2xl">
              {props.rating}
              <span className="text-gray-500 text-xs">/10</span>
            </p>
          ) : (
            <p className="font-bold bg-gradient-to-tr from-crayola to-pink-500 bg-clip-text text-transparent text-lg">
              N/A
            </p>
          )}
        </div>
      </div>

      <div className="text-gray-300 font-lato lg:text-sm lg:text-md my-3 max-w-3/4">
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
