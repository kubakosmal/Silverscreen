import { CgSearch } from "react-icons/cg";
import { IconContext } from "react-icons/lib";

export default function BigSearchBar() {
  return (
    <div className="relative m-3 w-full">
      <div className="absolute bg-gradient-to-tr from-red-500 to-purple-500 blur-sm rounded-lg inset-0"></div>
      <div className="flex bg-black relative rounded-lg p-1 w-full">
        <IconContext.Provider value={{ color: "gray" }}>
          <CgSearch className="w-5 h-5 sm:w-7 sm:h-7 absolute"></CgSearch>
        </IconContext.Provider>

        <input
          type="text"
          className="outline-0 ml-4 sm:ml-6 rounded-lg w-full text-sm sm:text-lg lg:text-xl text-white px-2 bg-transparent border-transparent"
        ></input>
      </div>
    </div>
  );
}
