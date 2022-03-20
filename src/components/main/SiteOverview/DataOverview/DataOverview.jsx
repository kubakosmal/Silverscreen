import { FiDatabase } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import TMDBLogo from "../tmdb.svg";

export default function DataOverview() {
  return (
    <div className="flex flex-col lg:flex-row items-center drop-shadow-3xl p-2 m-2 justify-center lg:m-5">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Strong data</h2>
        <h3 className="text-lg text-slate-300 text-center m-2 w-60">
          Silver is powered by TMDB, community driven movie and TV database.
        </h3>
      </div>
      <div>
        <IconContext.Provider value={{ color: "#84cc16" }}>
          <FiDatabase className="w-12 h-12 lg:w-40 lg:h-40"></FiDatabase>
        </IconContext.Provider>
      </div>
    </div>
  );
}
