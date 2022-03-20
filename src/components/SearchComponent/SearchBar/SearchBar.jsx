import { CgSearch } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { useState } from "react";

export default function SearchBar(props) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-tr  from-red-500 to-purple-500 blur-sm rounded-lg -inset-0"></div>
      <div className="flex bg-neutral-900 bg-opacity-05 relative rounded-xl px-1 w-full">
        <IconContext.Provider value={{ color: "lightgray" }}>
          <CgSearch className="w-5 h-5 absolute top-1 left-1"></CgSearch>
        </IconContext.Provider>

        <input
          onClick={props.openModal}
          type="text"
          placeholder="Search for movies, shows and people"
          className="outline-0 ml-4 rounded-sm w-full text-sm text-white p-1 px-2 bg-transparent border-transparent"
        ></input>
      </div>
    </div>
  );
}
