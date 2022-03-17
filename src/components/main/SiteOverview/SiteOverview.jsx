import TMDBLogo from "./tmdb.svg";
import DataOverview from "./DataOverview/DataOverview";
import CommunityOverview from "./CommunityOverview/CommunityOverview";
import BigSearchBar from "./BigSearchBar/BigSearchBar";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

export default function SiteOverview() {
  return (
    <div className="mt-6 max-w-6xl mx-auto flex flex-col items-center">
      <div className="">
        <h3>With Silver you can</h3>
        <div className="flex flex-col">
          <div className="border rounded-md font-ibm p-2 bg-neutral-700 flex">
            <IconContext.Provider value={{ color: "white" }}>
              <BsSearch className="w-10 h-10"></BsSearch>
            </IconContext.Provider>
            <div className="mx-2">
              <p>Learn more about producions, including:</p>
              <p>Box office</p>
              <p>Cast</p>
            </div>
          </div>
          <div className="border">
            <p>cos tam</p>
          </div>
          <div className="border">
            <p>cos tam</p>
          </div>
        </div>
      </div>
    </div>
  );
}
