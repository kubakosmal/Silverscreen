import { FiDatabase } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import TMDBLogo from "../tmdb.svg";

export default function DataOverview() {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-tr from-crayola to-pink-400 inset-0 blur-sm rounded-md"></div>
      <div className="p-6 relative flex flex-col bg-gradient-to-tr from-slate-1100 to-neutral-800 border-neutral-800 rounded-lg">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 lg:h-24 lg:w-24 -ml-3 lg:-ml-4"
            viewBox="0 0 20 20"
            id="database-svg"
          >
            <defs>
              <linearGradient
                id="database-gradient"
                x1="80.86%"
                x2="19.14%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#db2777" />
                <stop offset="100%" stopColor="#FFE66D" />
              </linearGradient>
            </defs>
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 lg:h-24 lg:w-24 -mx-4"
            viewBox="0 0 20 20"
            id="database-svg-2"
          >
            <defs>
              <linearGradient
                id="database-gradient-2"
                x1="80.86%"
                x2="19.14%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#FFE66D" />
              </linearGradient>
            </defs>
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 lg:h-24 lg:w-24"
            viewBox="0 0 20 20"
            id="database-svg-3"
          >
            <defs>
              <linearGradient
                id="database-gradient-3"
                x1="80.86%"
                x2="19.14%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#FFE66D" />
              </linearGradient>
            </defs>
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl lg:text-4xl mb-2 text-gray-100">
            Strong Data
          </h3>
          <p className="text-md lg:text-xl lg:leading-7 text-gray-300">
            TMDB provides information for over 700,00 Movies and over 120,000 TV
            Shows.
          </p>
        </div>
      </div>
    </div>
  );
}
