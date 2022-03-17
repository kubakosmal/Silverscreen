import { CgSearch } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { useState } from "react/cjs/react.development";

export default function SearchBar(props) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-tr  from-red-500 to-purple-500 blur-sm rounded-xl -inset-0"></div>
      <div className="flex bg-neutral-900 bg-opacity-05 relative rounded-xl p-1 w-full">
        <IconContext.Provider value={{ color: "lightgray" }}>
          <CgSearch className="w-6 h-6 absolute"></CgSearch>
        </IconContext.Provider>

        <input
          onClick={props.openModal}
          type="text"
          placeholder="Search for movies, shows and people"
          className="outline-0 ml-4 rounded-lg w-full text-sm text-white p-1 px-2 bg-transparent border-transparent"
        ></input>
      </div>
    </div>
  );
}
