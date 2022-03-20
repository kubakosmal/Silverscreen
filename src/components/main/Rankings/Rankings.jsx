import { useEffect, useState } from "react";
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
  const [genres, setGenres] = useState("");

  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);
  const [highestRevenueMovies, setHighestRevenueMovies] = useState([]);
  const [newestMovies, setNewestMovies] = useState([]);

  const [currentListOfProductions, setCurrentListOfProductions] = useState([]);
  const [currentSelectedList, setCurrentSelectedList] =
    useState("most-popular");
  const [currentListName, setCurrentListName] = useState("Most popular movies");

  useEffect(() => {
    if (currentSelectedList == "top-rated") {
      setCurrentListOfProductions(highestRatedMovies);
    } else if (currentSelectedList == "most-popular") {
      setCurrentListOfProductions(mostPopularMovies);
    } else if (currentSelectedList == "top-revenue") {
      setCurrentListOfProductions(highestRevenueMovies);
    } else if (currentSelectedList == "newest") {
      setCurrentListOfProductions(newestMovies);
    }
  }, [
    currentSelectedList,
    mostPopularMovies,
    highestRatedMovies,
    highestRevenueMovies,
    newestMovies,
    sortingOrder,
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
        `${constants.TMDB_BASE_PATH}discover/movie?api_key=${constants.API_KEY}&sort_by=${sortBy}.${sortingOrder}&vote_count.gte=${leastNumberOfVotes}&page=${pageNumber}&with_genres=${genres}`
      );
      const jsonData = await data.json();
      console.log(jsonData.results);
      stateToUpdate(jsonData.results);
    };

    fetchSorted(
      "popularity",
      setMostPopularMovies,
      sortingOrder,
      voteCountGte,
      genres
    );
    fetchSorted(
      "revenue",
      setHighestRevenueMovies,
      sortingOrder,
      voteCountGte,
      genres
    );
    fetchSorted(
      "vote_average",
      setHighestRatedMovies,
      sortingOrder,
      voteCountGte,
      genres
    );
    fetchSorted(
      "primary_release_date",
      setNewestMovies,
      sortingOrder,
      voteCountGte,
      genres
    );
  }, [sortingOrder, pageNumber, genres]);

  return (
    <div className="text-gray-200  mx-auto">
      <Header noBackdrop={true}></Header>
      <div className="flex mt-10 flex-col lg:flex-row text-gray-300 font-ibm max-w-5xl lg:mx-auto">
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
            type="movies"
          />
        </div>
        <div className="lg:w-4/5 flex flex-col items-center lg:ml-7">
          <h3 className="self-start text-xl font-bold font-lato mb-4">
            {currentListName}
          </h3>
          <div className="flex flex-wrap gap-1 justify-between ">
            {currentListOfProductions.map((prod, i) => {
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
