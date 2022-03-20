import { FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function CommunityOverview() {
  return (
    <div className="flex flex-col lg:flex-row items-center m-2 justify-center lg:m-5">
      <div>
        <IconContext.Provider value={{ color: "#00A7E1" }}>
          <FaUsers className="w-12 h-12 lg:w-48 lg:h-48 lg:mr-4"></FaUsers>
        </IconContext.Provider>
      </div>
      <div className="flex flex-col text-center items-center justify-center w-60">
        <h2 className="text-4xl font-bold">Even stronger community</h2>
        <h3 className="text-lg text-slate-300 text-center m-2 w-60">
          TMDB has over 400,000 users, including developers and companies.
        </h3>
      </div>
    </div>
  );
}
