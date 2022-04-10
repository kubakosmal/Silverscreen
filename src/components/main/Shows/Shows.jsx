import Header from "../../header/Header";
import Rankings from "../Rankings/Rankings";
import * as constants from "../../../constants";
import { useEffect, useState } from "react";
import RankingsProduction from "../Rankings/RankingsProduction/RankingsProduction";
import RankingsInterface from "../Rankings/RankingsInterface/RankingsInterface";
import { IconContext } from "react-icons/lib";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { LoggedContext } from "../../Context/Context";

export default function Shows() {
  const [sortingOrder, setSortingOrder] = useState("desc");
  const [highestRatedShows, setHighestRatedShows] = useState([]);
  const [mostPopularShows, setMostPopularShows] = useState([]);
  const [newestShows, setNewestShows] = useState([]);
  const [voteCountGte, setVoteCountGte] = useState(1000);
  const [pageNumber, setPageNumber] = useState(1);
  const [genreIds, setGenreIds] = useState([]);
  const [genres, setGenres] = useState("");

  const [currentListOfProductions, setCurrentListOfProductions] =
    useState(mostPopularShows);
  const [currentSelectedList, setCurrentSelectedList] =
    useState("most-popular");
  const [currentListName, setCurrentListName] = useState("Most popular shows");

  useEffect(() => {
    if (currentSelectedList == "top-rated") {
      setCurrentListOfProductions(highestRatedShows);
    } else if (currentSelectedList == "most-popular") {
      setCurrentListOfProductions(mostPopularShows);
    } else if (currentSelectedList == "newest") {
      setCurrentListOfProductions(newestShows);
    }
  }, [
    currentSelectedList,
    sortingOrder,
    mostPopularShows,
    highestRatedShows,
    newestShows,
    genres,
  ]);

  useEffect(() => {
    const fetchSorted = async (
      sortBy,
      stateToUpdate,
      sortingOrder,
      leastNumberOfVotes,
      genres
    ) => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}discover/tv?api_key=${constants.API_KEY}&sort_by=${sortBy}.${sortingOrder}&vote_count.gte=${leastNumberOfVotes}&page=${pageNumber}&with_genres=${genres}`
      );

      const jsonData = await data.json();

      stateToUpdate(jsonData.results);
    };

    fetchSorted("popularity", setMostPopularShows, sortingOrder, 1000, genres);
    fetchSorted(
      "vote_average",
      setHighestRatedShows,
      sortingOrder,
      3000,
      genres
    );

    fetchSorted("first_air_date", setNewestShows, sortingOrder, 100, genres);
  }, [sortingOrder, pageNumber, genres]);

  return (
    <div>
      <Header noBackdrop={true}></Header>
      <div className="max-w-4/5 mx-4 lg:mx-auto text-white">
        <div className="flex mt-5 flex-col lg:flex-row text-gray-300 font-ibm max-w-4/5 lg:mx-auto">
          <div className="font-ibm mb-5 lg:w-1/5 text-sm lg:text-md lg:text-lg items-center rounded-md border-neutral-700">
            <RankingsInterface
              changeGenres={(genresString) => {
                setGenres(genresString);
              }}
              changeRankingType={(listName) => {
                setCurrentSelectedList(listName);
                setPageNumber(1);
              }}
              changeCurrentListName={(fullName) => {
                setCurrentListName(fullName);
              }}
              changeSortingOrder={(order) => {
                setSortingOrder(order);
                setPageNumber(1);
              }}
              type="shows"
            />
          </div>
          <div className="lg:w-4/5 flex flex-col items-center lg:ml-7">
            <div className="self-start flex w-full items-center mb-4">
              <h3 className="text-lg font-bold font-lato whitespace-nowrap text-crayola">
                {currentListName.toUpperCase()}
              </h3>
              <div className="w-full h-2 ml-2 bg-crayola rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-1 justify-between ">
              {currentListOfProductions.map((prod, i) => {
                if (prod.poster_path && prod.popularity && prod.vote_average) {
                  return (
                    <div>
                      <RankingsProduction
                        releaseDate={prod.first_air_date}
                        key={i}
                        place={i + 1}
                        title={prod.name}
                        voteAverage={prod.vote_average}
                        popularity={prod.popularity}
                        posterPath={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
                        rankingType={currentSelectedList}
                        type="tvshows"
                        id={prod.id}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-full flex justify-between px-5 mb-5">
              <button
                disabled={pageNumber > 1 ? false : true}
                className=""
                onClick={() =>
                  setPageNumber((pageNumber) =>
                    pageNumber > 1 ? pageNumber - 1 : false
                  )
                }
              >
                <IconContext.Provider
                  value={{ color: `${pageNumber > 1 ? "#34D1BF" : "gray"}` }}
                >
                  <IoIosArrowBack className="w-12 h-12 hover:scale-110 duration-200"></IoIosArrowBack>
                </IconContext.Provider>
              </button>
              <div>
                <button
                  disabled={pageNumber < 5 ? false : true}
                  onClick={() =>
                    setPageNumber((pageNumber) =>
                      pageNumber < 5 ? pageNumber + 1 : false
                    )
                  }
                >
                  <IconContext.Provider
                    value={{ color: `${pageNumber < 5 ? "#34D1BF" : "gray"}` }}
                  >
                    <IoIosArrowForward className="w-12 h-12 hover:scale-110 duration-200"></IoIosArrowForward>
                  </IconContext.Provider>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoggedContext.Consumer>{(ctx) => {}}</LoggedContext.Consumer>
    </div>
  );
}
