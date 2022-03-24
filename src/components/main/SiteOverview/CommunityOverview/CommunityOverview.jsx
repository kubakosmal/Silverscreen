import { FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function CommunityOverview() {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-tr from-crayola to-pink-400 inset-0 blur-sm rounded-md"></div>
      <div className="p-6 lg:p-10 relative flex flex-col bg-gradient-to-br from-slate-1100 to-neutral-800 border-neutral-800 rounded-lg">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl lg:text-4xl my-2 lg:my-4 text-gray-100">
            Even Stronger Community
          </h3>
          <p className="text-xl lg:text-2xl lg:leading-10 text-gray-300">
            TMDB is one of the largest Movies and TV Shows database. It provides
            information for over 700,000 Movies and over 120,000 TV Shows.
          </p>
        </div>
      </div>
    </div>
  );
}
