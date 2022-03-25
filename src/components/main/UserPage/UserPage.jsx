import Header from "../../header/Header";
import { LoggedContext } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import * as constants from "../../../constants";
import Atropos from "atropos/react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";

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
      <div className="max-w-5xl my-5 mx-4 lg:mx-auto text-gray-200 font-ibm flex flex-col ">
        <div className="flex flex-col lg:flex-row border-neutral-800 border-2 p-6 rounded-lg bg-gradient-to-tr from-slate-1000 to-black">
          <div className="flex flex-col items-center">
            {avatarPath ? (
              <img
                className="rounded-full w-40 h-40 object-cover border-2 border-neutral-800"
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
              numOfShowsInWatchList={showsWatchlist.length}
            />
          </div>
        </div>

        <div className="w-full my-5">
          <div className="flex justify-between">
            <label htmlFor="fav-movies">
              <input
                hidden
                id="fav-movies"
                type="radio"
                name="selected-list"
                value="Favorite Movies"
                onClick={(e) => setCurrentSelectedListName(e.target.value)}
                className="peer"
              ></input>
              <div className="peer-checked:text-crayola hover:text-crayola cursor-pointer">
                <p>Favorite Movies</p>
              </div>
            </label>
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
              <div className="peer-checked:text-crayola hover:text-crayola cursor-pointer">
                <p>Favorite Shows</p>
              </div>
            </label>
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
              <div className="peer-checked:text-crayola hover:text-crayola cursor-pointer">
                <p>Movie Watchlist</p>
              </div>
            </label>
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
              <div className="peer-checked:text-crayola hover:text-crayola cursor-pointer">
                <p>Shows Watchlist</p>
              </div>
            </label>
          </div>

          <div className="flex flex-wrap gap-5">
            {currentSelectedList?.map((movie) => {
              return (
                <Link to={`/movies/${movie.id}`}>
                  <Atropos shadow={false}>
                    <div className="relative w-40">
                      <div className="absolute inset-0 rounded-md bg-black blur-sm"></div>
                      <div className="relative">
                        <img
                          className="rounded-lg"
                          src={`${constants.IMAGES_BASE_PATH}w500${movie.poster_path}`}
                        ></img>
                      </div>
                    </div>
                  </Atropos>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
