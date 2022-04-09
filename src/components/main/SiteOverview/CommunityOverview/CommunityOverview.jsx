import { FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function CommunityOverview() {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-tr from-blue-500 to-secondary inset-0 blur-sm rounded-md"></div>
      <div className="p-6 pt-3 relative flex flex-col bg-gradient-to-br from-slate-1100 to-neutral-800 border-neutral-800 rounded-lg">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 lg:h-24 lg:w-24"
            viewBox="0 0 20 20"
            id="community-svg"
          >
            <defs>
              <linearGradient
                id="community-gradient"
                x1="80.86%"
                x2="19.14%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#34D1BF" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl lg:text-3xl mb-2 text-gray-100">
            Even Stronger Community
          </h3>
          <p className="text-md lg:text-xl lg:leading-7  decoration-neutral-600 underline-offset-4 text-gray-300">
            TMDB is used by over 400,000 developers and companies from all over
            the world.
          </p>
        </div>
      </div>
    </div>
  );
}
