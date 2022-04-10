import Header from "../../header/Header";
import { LoggedContext } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import * as constants from "../../../constants";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";
import ProductionDescription from "../MoviePage/ProductionDescription/ProductionDescription";

export default function UserPage() {
  const authContext = useContext(LoggedContext);
  const sessionId = authContext.sessionId;

  const [accountDetails, setAccountDetails] = useState({});
  const [accountId, setAccountId] = useState(1);
  const [avatarPath, setAvatarPath] = useState("");

  const [createdLists, setCreatedLists] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [favShows, setFavShows] = useState([]);
  const [movieWatchlist, setMovieWatchlist] = useState([]);
  const [showsWatchlist, setShowsWatchlist] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [ratedShows, setRatedShows] = useState([]);

  const [averageMovieRating, setAverageMovieRating] = useState(0);
  const [averageShowsRating, setAverageShowsRating] = useState(0);
  const [numOfFavMovies, setNumOfFavMovies] = useState(0);
  const [numOfFavShows, setNumOfFavShows] = useState(0);
  const [numOfMoviesInWatchlist, setNumOfMoviesInWatchlist] = useState(0);
  const [numOfShowsInWatchList, setNumOfShowsInWatchlist] = useState(0);

  const [currentSelectedListName, setCurrentSelectedListName] =
    useState("Favorite Movies");
  const [currentSelectedList, setCurrentSelectedList] = useState([]);

  useEffect(() => {
    if (currentSelectedListName == "Favorite Movies") {
      setCurrentSelectedList(favMovies);
    } else if (currentSelectedListName == "Favorite Shows") {
      setCurrentSelectedList(favShows);
    } else if (currentSelectedListName == "Movie Watchlist") {
      setCurrentSelectedList(movieWatchlist);
    } else if (currentSelectedListName == "Shows Watchlist") {
      setCurrentSelectedList(showsWatchlist);
    }
  }, [
    currentSelectedListName,
    favMovies,
    favShows,
    movieWatchlist,
    showsWatchlist,
    createdLists,
  ]);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}account?api_key=${constants.API_KEY}&session_id=${authContext.sessionId}`
      );
      const jsonData = await data.json();

      setAccountDetails(jsonData);
      setAccountId(jsonData.id);
      setAvatarPath(jsonData.avatar.tmdb.avatar_path);
    };

    const fetchData = async (listToFetch, stateToUpdate) => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}account/${accountId}/${listToFetch}?api_key=${constants.API_KEY}&session_id=${authContext.sessionId}`
      );
      const jsonData = await data.json();

      stateToUpdate(jsonData.results);
    };

    fetchData("lists", setCreatedLists);
    fetchData("favorite/movies", setFavMovies);
    fetchData("favorite/tv", setFavShows);
    fetchData("watchlist/movies", setMovieWatchlist);
    fetchData("watchlist/tv", setShowsWatchlist);
    fetchData("rated/movies", setRatedMovies);
    fetchData("rated/tv", setRatedShows);

    fetchAccountDetails();
  }, []);

  useEffect(() => {
    let averageRating = 0;

    ratedMovies.forEach((movie) => {
      averageRating += movie.rating;
    });

    averageRating = (averageRating / ratedMovies.length).toFixed(1);

    let averageShows = 0;

    ratedShows.forEach((show) => {
      averageShows += show.rating;
    });

    averageShows = (averageShows / ratedShows.length).toFixed(1);

    setAverageMovieRating(averageRating);
    setAverageShowsRating(averageShows);
  }, [ratedMovies, ratedShows]);
  return (
    <div>
      <Header noBackdrop={true}></Header>
      <div className="max-w-4/5 my-5 mx-4 lg:mx-auto text-white font-ibm flex flex-col ">
        <div className="relative">
          <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
          <div className="relative flex flex-col lg:flex-row px-8 py-4 rounded-lg bg-gradient-to-tr from-slate-1000 to-slate-1100">
            <div className="flex flex-col items-center">
              {avatarPath ? (
                <img
                  className="rounded-full w-52 h-52 object-cover  border-neutral-800"
                  src={`${constants.IMAGES_BASE_PATH}w500${avatarPath}`}
                ></img>
              ) : (
                <div className="w-40 h-40 rounded-full"></div>
              )}
            </div>
            <div className="">
              <UserInfo
                userName={accountDetails.username}
                numOfFavMovies={favMovies.length}
                numOfFavShows={favShows.length}
                numOfRatedMovies={ratedMovies.length}
                numOfRatedShows={ratedShows.length}
                averageMovieRating={averageMovieRating}
                averageShowsRating={averageShowsRating}
                numOfMoviesInWatchlist={movieWatchlist.length}
                numOfShowsInWatchlist={showsWatchlist.length}
              />
            </div>
          </div>
        </div>

        <div className="w-full my-5 lg:my-10">
          <div className="flex">
            <div className="w-1/4 text-center">
              <label htmlFor="fav-movies">
                <input
                  defaultChecked
                  hidden
                  id="fav-movies"
                  type="radio"
                  name="selected-list"
                  value="Favorite Movies"
                  onClick={(e) => setCurrentSelectedListName(e.target.value)}
                  className="peer"
                ></input>
                <div className="peer-checked:border-secondary border-b-2 border-transparent peer-checked:text-secondary hover:text-secondary cursor-pointer">
                  <p className="font-bold font-lato lg:text-xl leading-5">
                    Favorite Movies
                  </p>
                </div>
              </label>
            </div>

            <div className="w-1/4 text-center">
              <label htmlFor="fav-shows">
                <input
                  hidden
                  id="fav-shows"
                  type="radio"
                  name="selected-list"
                  value="Favorite Shows"
                  onClick={(e) => setCurrentSelectedListName(e.target.value)}
                  className="peer"
                ></input>
                <div className="peer-checked:border-secondary border-b-2 border-transparent peer-checked:text-secondary hover:text-secondary cursor-pointer">
                  <p className="font-bold font-lato lg:text-xl leading-5">
                    Favorite Shows
                  </p>
                </div>
              </label>
            </div>

            <div className="w-1/4 text-center">
              <label htmlFor="movie-watchlist">
                <input
                  hidden
                  id="movie-watchlist"
                  type="radio"
                  name="selected-list"
                  value="Movie Watchlist"
                  onClick={(e) => setCurrentSelectedListName(e.target.value)}
                  className="peer"
                ></input>
                <div className="peer-checked:border-secondary border-b-2 border-transparent peer-checked:text-secondary hover:text-secondary cursor-pointer">
                  <p className="font-bold font-lato lg:text-xl leading-5">
                    Movie Watchlist
                  </p>
                </div>
              </label>
            </div>

            <div className="w-1/4 text-center">
              <label htmlFor="shows-watchlist">
                <input
                  hidden
                  id="shows-watchlist"
                  type="radio"
                  name="selected-list"
                  value="Shows Watchlist"
                  onClick={(e) => setCurrentSelectedListName(e.target.value)}
                  className="peer"
                ></input>
                <div className="peer-checked:border-secondary border-b-2 border-transparent peer-checked:text-secondary hover:text-secondary cursor-pointer">
                  <p className="font-bold font-lato lg:text-xl leading-5">
                    Shows Watchlist
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bg-black inset-0 rounded-md blur-sm"></div>
            <div className="relative bg-gradient-to-br from-slate-1000 to-slate-1100 grid grid-cols-1 lg:grid-cols-2 rounded-md border-neutral-800">
              {currentSelectedList?.map((prod) => {
                return (
                  <Link
                    to={`${
                      prod.name ? "/tvshows/" + prod.id : "/movies/" + prod.id
                    }`}
                  >
                    <div className="flex border-b m-2 h-48 border-neutral-800 hover:border-secondary p-6">
                      <div className="lg:w-64 w-80">
                        <img
                          className="rounded-md lg:rounded-lg"
                          src={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
                        ></img>
                      </div>
                      <div className="mx-4">
                        <div>
                          <p className="text-crayola text-md lg:text-2xl font-bold font-lato">
                            {prod.title ? prod.title : prod.name}
                          </p>
                        </div>
                        <div>
                          <p>
                            {prod.release_date
                              ? prod.release_date.slice(0, 4)
                              : prod.first_air_date
                              ? prod.first_air_date.slice(0, 4)
                              : false}
                          </p>
                        </div>
                        <div className="mt-1 lg:mt-2">
                          <p className="text-gray-300 text-xs lg:text-sm">
                            {prod.overview
                              ? prod.overview.length > 140
                                ? prod.overview.slice(0, 140) + "..."
                                : prod.overview
                              : false}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
