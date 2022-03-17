import { useEffect, useState } from "react/cjs/react.development";
import Header from "../../header/Header";
import * as constants from "../../../constants";
import RankingsProduction from "./RankingsProduction/RankingsProduction";
import RankingsInterface from "./RankingsInterface/RankingsInterface";
import { IconContext } from "react-icons/lib";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Rankings() {
  const useForceUpdate = () => useState()[1];
  const forceUpdate = useForceUpdate();

  const [year, setYear] = useState(null);
  const [voteCountGte, setVoteCountGte] = useState(1000);
  const [sortingOrder, setSortingOrder] = useState("desc");
  const [pageNumber, setPageNumber] = useState(1);

  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);
  const [highestRevenueMovies, setHighestRevenueMovies] = useState([]);
  const [newestMovies, setNewestMovies] = useState([]);

  const [currentListOfFilms, setCurrentListOfFilms] = useState([]);
  const [currentSelectedList, setCurrentSelectedList] =
    useState("most-popular");
  const [currentListName, setCurrentListName] = useState("Most popular movies");

  useEffect(() => {
    if (currentSelectedList == "top-rated") {
      setCurrentListOfFilms(highestRatedMovies);
    } else if (currentSelectedList == "most-popular") {
      setCurrentListOfFilms(mostPopularMovies);
    } else if (currentSelectedList == "top-revenue") {
      setCurrentListOfFilms(highestRevenueMovies);
    } else if (currentSelectedList == "newest") {
      setCurrentListOfFilms(newestMovies);
    }
  }, [
    currentSelectedList,
    mostPopularMovies,
    highestRatedMovies,
    highestRevenueMovies,
    newestMovies,
    sortingOrder,
  ]);

  useEffect(() => {
    const fetchSorted = async (
      sortBy,
      stateToUpdate,
      sortingOrder,
      leastNumberOfVotes
    ) => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}discover/movie?api_key=${constants.API_KEY}&sort_by=${sortBy}.${sortingOrder}&vote_count.gte=${leastNumberOfVotes}&page=${pageNumber}`
      );
      const jsonData = await data.json();
      console.log(jsonData.results);
      stateToUpdate(jsonData.results);
    };

    fetchSorted("popularity", setMostPopularMovies, sortingOrder, voteCountGte);
    fetchSorted("revenue", setHighestRevenueMovies, sortingOrder, voteCountGte);
    fetchSorted(
      "vote_average",
      setHighestRatedMovies,
      sortingOrder,
      voteCountGte
    );
    fetchSorted(
      "primary_release_date",
      setNewestMovies,
      sortingOrder,
      voteCountGte
    );
  }, [sortingOrder, pageNumber]);

  return (
    <div className="text-gray-200  mx-auto">
      <Header noBackdrop={true}></Header>
      <div className="flex flex-col md:flex-row text-gray-300 font-ibm max-w-5xl md:mx-auto">
        <div className="font-ibm mb-5 md:w-1/5 text-sm md:text-md md:text-lg items-center rounded-md border-neutral-700">
          <RankingsInterface
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
            type="movies"
          />
        </div>
        <div className="md:w-4/5 flex flex-col items-center md:ml-7">
          <h3 className="self-start text-xl font-bold font-lato mb-4">
            {currentListName}
          </h3>
          <div className="flex flex-wrap gap-1 justify-between ">
            {currentListOfFilms.map((prod, i) => {
              if (prod.poster_path && prod.popularity && prod.vote_average) {
                return (
                  <RankingsProduction
                    rankingType={currentSelectedList}
                    key={i}
                    place={i + 1}
                    releaseDate={prod.release_date}
                    type="movies"
                    title={prod.title}
                    genreIds={prod.genre_ids}
                    id={prod.id}
                    revenue={prod.revenue}
                    voteAverage={prod.vote_average}
                    voteCount={prod.vote_count}
                    popularity={prod.popularity}
                    posterPath={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path} `}
                  />
                );
              } else {
                i = i - 1;
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
  );
}
