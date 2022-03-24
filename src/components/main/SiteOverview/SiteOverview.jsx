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
    <div className="mt-6 max-w-6xl mx-auto text-gray-300 rounded-md font-lato flex-flex-col">
      <SilverscreenOverview />
      <div className="lg:w-2/3 my-6">
        <DataOverview />
      </div>
      <div className="lg:w-2/3">
        <CommunityOverview></CommunityOverview>
      </div>
    </div>
  );
}
