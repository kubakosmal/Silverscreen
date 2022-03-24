import Atropos from "atropos/react";
import TMDBLogo from "../SilverscreenOverview/tmdblogo.svg";
import { ReactComponent as TmdbSvg } from "./tmdblogo.svg";

export default function SilverscreenOverview() {
  return (
    <div className="relative lg:w-2/3">
      <div className="absolute bg-gradient-to-tr from-purple-500 to-[#01b4e4] inset-0 blur-sm rounded-md"></div>
      <div className="p-6 lg:p-10 relative flex flex-col bg-gradient-to-br from-slate-1100 to-neutral-800 border-neutral-800 rounded-lg">
        <div className="text-6xl lg:text-7xl flex items-center">
          <div className="lg:w-24 lg:h-24 w-16 h-16 text-gray-200 border-white lg:mr-1 rounded-lg lg:rounded-2xl flex items-center font-bold justify-center bg-gradient-to-tr from-red-500 to-purple-700">
            S
          </div>
          <div className="">
            <p className="mx-2 bg-gradient-to-tr from-purple-500 to-[#01b4e4] bg-clip-text text-transparent font-bold text-7xl lg:text-8xl font-sora">
              +
            </p>
          </div>
          <div className="">
            <TmdbSvg className="w-28 h-12 lg:w-48 lg:h-24"></TmdbSvg>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl lg:text-4xl my-2 lg:my-4">
            Silverscreen uses TMDB
          </h3>
          <p className="text-xl lg:text-2xl lg:leading-10">
            Silverscreen is a web app that provides User Interface to The Movie
            Database API.
          </p>
        </div>
      </div>
    </div>
  );
}
