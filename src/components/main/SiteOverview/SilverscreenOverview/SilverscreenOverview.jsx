import Atropos from "atropos/react";
import TMDBLogo from "../SilverscreenOverview/tmdblogo.svg";
import { ReactComponent as TmdbSvg } from "./tmdblogo.svg";

export default function SilverscreenOverview() {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-tr from-purple-500 to-[#01b4e4] inset-0 blur-sm rounded-md"></div>
      <div className="p-6 relative flex flex-col bg-gradient-to-tr from-slate-1100 to-neutral-800 border-neutral-800 rounded-lg">
        <div className="text-5xl lg:text-6xl flex items-center">
          <div className="lg:w-20 lg:h-20 w-14 h-14 text-white border-white lg:mr-1 rounded-lg lg:rounded-2xl flex items-center font-bold justify-center bg-gradient-to-tr from-red-500 to-purple-700">
            S
          </div>
          <div className="">
            <p className="mx-2 bg-gradient-to-tr from-purple-500 to-[#01b4e4] bg-clip-text text-transparent font-bold text-5xl lg:text-8xl font-sora">
              +
            </p>
          </div>
          <div className="">
            <TmdbSvg className="w-24 h-12 lg:w-40 lg:h-24"></TmdbSvg>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl lg:text-3xl my-2 text-gray-100">
            Silverscreen Uses TMDB
          </h3>
          <p className="text-md lg:text-xl lg:leading-7  decoration-neutral-600 underline-offset-4 text-gray-300">
            Silverscreen is a web app that provides User Interface to The Movie
            Database API.
          </p>
        </div>
      </div>
    </div>
  );
}
