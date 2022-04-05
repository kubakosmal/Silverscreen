import TMDBLogo from "./tmdb.svg";
import CommunityOverview from "./CommunityOverview/CommunityOverview";
import BigSearchBar from "./BigSearchBar/BigSearchBar";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import SilverscreenOverview from "./SilverscreenOverview/SilverscreenOverview";
import DataOverview from "./DataOverview/DataOverview";
import { ReactComponent as TmdbSvg } from "./SilverscreenOverview/tmdblogo.svg";

export default function SiteOverview() {
  return (
    <div className="mt-3 max-w-4/5 mx-auto text-gray-300 rounded-md font-lato flex flex-col">
      <div class="">
        <div class="w-full text-gray-300 xl:px-0">
          <div class=" grid gap-6 md:w-full lg:w-full lg:grid-cols-3">
            <div className="h-full relative">
              <div className="absolute bg-black rounded-2xl inset-0 blur-sm"></div>
              <div class="h-full relative bg-neutral-900 border-2 border-neutral-600 rounded-2xl shadow-xl px-8 py-8 sm:px-12 lg:py-12 lg:px-8">
                <div class="mb-16 lg:mb-36 space-y-4">
                  <h3 class="text-2xl font-semibold text-white">
                    Silverscreen uses TMDB
                  </h3>
                  <p class="mb-6">
                    Silverscreen is a web app that provides User Interface to
                    The Movie Database API.
                  </p>
                  <a href="#" class="block font-medium text-purple-600">
                    Visit TMDB
                  </a>
                </div>
                <div className="absolute bottom-10 right-10 text-4xl flex items-center justify-end">
                  <div className="">
                    <TmdbSvg className="w-28 h-16 lg:w-40 lg:h-24"></TmdbSvg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full">
              <div className="absolute bg-black inset-0 blur-sm rounded-2xl"></div>
              <div class="h-full relative border-2 bg-neutral-900 border-neutral-600 rounded-2xl shadow-xl px-8 py-8 sm:px-12 lg:py-12 lg:px-8">
                <div class="mb-16 lg:mb-36 space-y-4">
                  <h3 class="text-2xl font-semibold text-white">
                    Strong and Reliable Data
                  </h3>
                  <p class="mb-6">
                    TMDB provides information for over 700,00 Movies and over
                    120,000 TV Shows.
                  </p>
                  <a href="#" class="block font-medium text-purple-600">
                    Know more
                  </a>
                </div>
                <div className="flex absolute bottom-10 right-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 lg:h-32 lg:w-32"
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
                        <stop offset="0%" stop-color="#f472b6" />
                        <stop offset="100%" stop-color="#FFE66D" />
                      </linearGradient>
                    </defs>
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative h-full">
              <div className="absolute bg-black rounded-2xl blur-sm inset-0"></div>
              <div class="h-full relative border-2 bg-neutral-900 border-neutral-600 rounded-2xl shadow-xl px-8 py-8 sm:px-12 lg:py-12 lg:px-8">
                <div class="mb-16 lg:mb-36 space-y-4">
                  <h3 class="text-2xl font-semibold text-white">
                    Even Stronger Community
                  </h3>
                  <p class="mb-6">
                    TMDB is used by over 400,000 developers and companies from
                    all over the world.
                  </p>
                  <a href="#" class="block font-medium text-purple-600">
                    Know more
                  </a>
                </div>
                <div className="absolute bottom-10 right-5 flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 lg:h-32 lg:w-32"
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
                        <stop offset="0%" stop-color="#34D1BF" />
                        <stop offset="100%" stop-color="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
