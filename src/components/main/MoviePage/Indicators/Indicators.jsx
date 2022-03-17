import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { AiOutlineEye } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";

export default function Indicators(props) {
  return (
    <div className="flex p-2 font-ibm justify-around text-gray-300">
      <div className="text-xs flex flex-col items-center">
        <div className="flex items-center justify-center">
          <IconContext.Provider value={{ color: "#FFE66D" }}>
            <IoStatsChartSharp className="w-4 h-4"></IoStatsChartSharp>
          </IconContext.Provider>
          <p className="text-xs">{Math.floor(props.popularity)}</p>
        </div>
        <p></p>
      </div>
      <div className="text-xs flex flex-col items-center">
        <div className="flex items-center justify-center">
          <IconContext.Provider value={{ color: "lightblue" }}>
            <IoStatsChartSharp className="w-5 h-5"></IoStatsChartSharp>
          </IconContext.Provider>
          <p className="text-sm">{Math.floor(props.popularity)}</p>
        </div>
      </div>
    </div>
  );
}
