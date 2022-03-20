import { AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosArrowDropup, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";
import * as constants from "../../../../constants";

export default function RankingsInterface({
  type,
  changeRankingType,
  changeSortingOrder,
  changeCurrentListName,
  changeGenres,
}) {
  const [popularityChecked, setPopularityChecked] = useState(true);
  const [ratingChecked, setRatingChecked] = useState(false);
  const [revenueChecked, setRevenueChecked] = useState(false);
  const [releaseChecked, setReleaseChecked] = useState(false);

  const [ascendingChecked, setAscendingChecked] = useState(false);
  const [descendingChecked, setDescendingChecked] = useState(true);

  const [genreIds, setGenreIds] = useState([]);
  const [checkedIds, setCheckedIds] = useState(
    genreIds.map((genre) => {
      return { name: genre.name, id: genre.id, checked: false };
    })
  );

  useEffect(() => {
    console.log(checkedIds);
    const csvGenres = checkedIds
      .filter((genre) => genre.checked)
      .map((genre) => genre.id)
      .join(",");
    console.log(csvGenres);

    changeGenres(csvGenres);
  }, [checkedIds]);

  useEffect(() => {
    setCheckedIds(
      genreIds.map((genre) => {
        return { name: genre.name, id: genre.id, checked: false };
      })
    );
  }, [genreIds]);

  const handleCheckboxChange = (id) => {
    let newCheckedIds = checkedIds.map((genre) =>
      genre.id == id
        ? { id: genre.id, name: genre.name, checked: !genre.checked }
        : { id: genre.id, name: genre.name, checked: genre.checked }
    );

    setCheckedIds(newCheckedIds);
    console.log(newCheckedIds);
  };

  useEffect(() => {
    const fetchGenres = async (type, stateToUpdate) => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}genre/${type}/list?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      setGenreIds(
        jsonData.genres.filter(
          (genre) =>
            !["Romance", "Mystery", "TV Movie", "History", "Western"].includes(
              genre.name
            )
        )
      );
      console.log(jsonData.genres);
    };

    if (type == "shows") {
      fetchGenres("tv");
    } else {
      fetchGenres("movie");
    }
  }, []);

  const uncheckAll = () => {
    setPopularityChecked(false);
    setRatingChecked(false);
    setReleaseChecked(false);
    setRevenueChecked(false);
  };
  return (
    <div className="relative rounded-md">
      <div className="absolute inset-0 bg-black blur-sm rounded-md"></div>
      <div className="relative bg-neutral-900 border-neutral-800 border-2  p-2 rounded-md font-lato text-gray-400">
        <p className="text-gray-300 text-lg font-bold font-lato  border-b-2 border-neutral-800">
          Sort by
        </p>
        <div className="relative rounded-md text-lg">
          <div className="relative mt-1 rounded-md">
            <label
              className="cursor-pointer hover:text-crayola duration-300"
              htmlFor="most-popular"
            >
              <input
                defaultChecked="true"
                className="hidden peer"
                type="radio"
                name="typeOfRanking"
                id="most-popular"
                onClick={(e) => {
                  changeRankingType(e.target.id);
                  uncheckAll();
                  setPopularityChecked(true);
                  changeCurrentListName(`Most popular ${type}`);
                }}
              ></input>

              <div className="peer-checked:text-crayola flex items-center justify-between">
                <p className="">Popularity</p>
                <IconContext.Provider
                  value={{
                    color: `${popularityChecked ? "#FFE66D" : "#9ca3af"}`,
                  }}
                >
                  <IoIosArrowDropup className="w-6 h-6"></IoIosArrowDropup>
                </IconContext.Provider>
              </div>
            </label>

            <label
              className="cursor-pointer hover:text-crayola duration-300"
              htmlFor="top-rated"
            >
              <input
                className="hidden peer"
                type="radio"
                name="typeOfRanking"
                id="top-rated"
                onClick={(e) => {
                  changeRankingType(e.target.id);
                  uncheckAll();
                  setRatingChecked(true);
                  changeCurrentListName(`Top rated ${type}`);
                }}
              ></input>
              <div className="peer-checked:text-crayola flex items-center justify-between">
                <p className="">Rating</p>
                <IconContext.Provider
                  value={{ color: `${ratingChecked ? "#FFE66D" : "#9ca3af"}` }}
                >
                  <AiFillStar className="w-6 h-6"></AiFillStar>
                </IconContext.Provider>
              </div>
            </label>

            {type == "shows" ? (
              false
            ) : (
              <label
                className="cursor-pointer hover:text-crayola duration-300 peer-checked:text-red-pigment"
                htmlFor="top-revenue"
              >
                <input
                  className="hidden peer"
                  type="radio"
                  name="typeOfRanking"
                  id="top-revenue"
                  onClick={(e) => {
                    changeRankingType(e.target.id);
                    uncheckAll();
                    setRevenueChecked(true);
                    changeCurrentListName("Top revenue movies");
                  }}
                ></input>
                <div className="peer-checked:text-crayola flex justify-between items-center">
                  <p className="">Revenue</p>
                  <IconContext.Provider
                    value={{
                      color: `${revenueChecked ? "#FFE66D" : "#9ca3af"}`,
                    }}
                  >
                    <BsCurrencyDollar className="w-6 h-6"></BsCurrencyDollar>
                  </IconContext.Provider>
                </div>
              </label>
            )}

            <label
              className="cursor-pointer hover:text-crayola duration-300 peer-checked:text-red-pigment"
              htmlFor="newest"
            >
              <input
                className="hidden peer"
                type="radio"
                name="typeOfRanking"
                id="newest"
                onClick={(e) => {
                  changeRankingType(e.target.id);
                  uncheckAll();
                  setReleaseChecked(true);
                  changeCurrentListName(`Newest ${type}`);
                }}
              ></input>
              <div className="peer-checked:text-crayola flex items-center justify-between">
                <p className="">Release Date</p>
                <IconContext.Provider
                  value={{ color: `${releaseChecked ? "#FFE66D" : "#9ca3af"}` }}
                >
                  <AiOutlineCalendar className="w-6 h-6"></AiOutlineCalendar>
                </IconContext.Provider>
              </div>
            </label>
          </div>
        </div>
        <div className="lg:mt-5">
          <p className="text-lg font-lato font-bold border-b-2 border-neutral-800 text-gray-300">
            Order
          </p>
          <div className="relative">
            <div className="relative rounded-md">
              <div className="text-lg mt-1">
                <label htmlFor="descending" className="hover:text-crayola">
                  <input
                    defaultChecked="true"
                    className="hidden peer"
                    name="sorting-order"
                    type="radio"
                    id="descending"
                    onClick={() => {
                      changeSortingOrder("desc");
                      setDescendingChecked(true);
                      setAscendingChecked(false);
                    }}
                  ></input>
                  <div className="peer-checked:text-crayola flex items-center justify-between">
                    <p className="cursor-pointer">Descending</p>
                    <IconContext.Provider
                      value={{
                        color: `${descendingChecked ? "#FFE66D" : "#9ca3af"}`,
                      }}
                    >
                      <IoIosArrowDown className="w-6 h-6"></IoIosArrowDown>
                    </IconContext.Provider>
                  </div>
                </label>
                <label htmlFor="ascending" className="hover:text-crayola">
                  <input
                    className="hidden peer"
                    name="sorting-order"
                    type="radio"
                    id="ascending"
                    onClick={() => {
                      changeSortingOrder("asc");
                      setAscendingChecked(true);
                      setDescendingChecked(false);
                    }}
                  ></input>
                  <div className="peer-checked:text-crayola flex items-center justify-between">
                    <p className="cursor-pointer">Ascending</p>
                    <IconContext.Provider
                      value={{
                        color: `${ascendingChecked ? "#FFE66D" : "#9ca3af"}`,
                      }}
                    >
                      <IoIosArrowUp className="w-6 h-6"></IoIosArrowUp>
                    </IconContext.Provider>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-lg font-lato font-bold border-b-2 border-neutral-800 text-gray-300">
            Genres
          </p>
          <div className="relative">
            <div className="relative mt-2 rounded-md">
              <div className="text-xs font-bold flex flex-wrap ">
                {genreIds.map((genre) => {
                  return (
                    <div className="">
                      <label htmlFor={genre.name}>
                        <input
                          className="hidden peer"
                          type="checkbox"
                          id={genre.name}
                          value={genre.id}
                          onClick={(e) => {
                            handleCheckboxChange(e.target.value);
                          }}
                        ></input>
                        <div className="border-2 cursor-pointer border-neutral-700 rounded-lg p-1 px-2 m-1 peer-checked:bg-white">
                          {genre.name}
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
