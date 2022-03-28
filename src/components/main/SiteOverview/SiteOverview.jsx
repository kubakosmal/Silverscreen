import TMDBLogo from "./tmdb.svg";
import CommunityOverview from "./CommunityOverview/CommunityOverview";
import BigSearchBar from "./BigSearchBar/BigSearchBar";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import SilverscreenOverview from "./SilverscreenOverview/SilverscreenOverview";
import DataOverview from "./DataOverview/DataOverview";

export default function SiteOverview() {
  return (
    <div className="px-2 mt-6 max-w-4/5 mx-auto text-gray-300 rounded-md font-lato flex flex-col">
      <div className="self-start w-1/2">
        <SilverscreenOverview />
      </div>

      <div className="self-end my-8 lg:my-12 w-1/2">
        <DataOverview />
      </div>
      <div className="flex">
        <div className="w-1/2">
          <CommunityOverview></CommunityOverview>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-red-500"></div>
        </div>
      </div>
    </div>
  );
}
