import { FiDatabase } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import TMDBLogo from "../tmdb.svg";

export default function DataOverview() {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-tr from-crayola to-pink-400 inset-0 blur-sm rounded-md"></div>
      <div className="p-6 lg:p-10 relative flex flex-col bg-gradient-to-br from-slate-1100 to-neutral-800 border-neutral-800 rounded-lg">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 lg:h-24 lg:w-24 -ml-3 lg:-ml-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 lg:h-24 lg:w-24 -mx-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 lg:h-24 lg:w-24"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl lg:text-4xl my-2 lg:my-4">
            Strong Data
          </h3>
          <p className="text-xl lg:text-2xl lg:leading-10">
            TMDB is one of the largest Movies and TV Shows database. It provides
            information for over 700,000 Movies and over 120,000 TV Shows.
          </p>
        </div>
      </div>
    </div>
  );
}
