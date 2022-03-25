export default function UserInfo(props) {
  return (
    <div className="w-full lg:mx-10 flex flex-col items-center lg:items-start">
      <div>
        <p className="text-gray-200 text-4xl font-bold font-lato">
          {props.userName}
        </p>
      </div>
      <div className="flex flex-col my-5 lg:flex-row w-full">
        <div className="flex items-center pb-2 lg:w-1/2">
          <div className="border-2 p-3 flex items-center justify-center rounded-full w-16 h-16 text-2xl font-bold font-ibm">
            {props.averageMovieRating}
          </div>
          <div className="mx-2">
            <p>Average Movie Rating</p>
          </div>
        </div>
        <div className="flex items-center pb-2 lg:w-1/2">
          <div className="border-2 p-3 flex items-center justify-center rounded-full w-16 h-16 text-2xl font-bold font-ibm">
            {props.averageShowsRating}
          </div>
          <div className="mx-2">
            <p>Average Show Rating</p>
          </div>
        </div>
      </div>

      <div className="w-full my-3">
        <p>Movies</p>
        <div className="flex flex-col lg:flex-row w-full my-2">
          <div className="flex items-center lg:w-1/2">
            <div className="flex items-center justify-center rounded-full text-4xl font-bold font-ibm">
              {props.numOfRatedMovies}
            </div>
            <div className="">
              <p className="mx-2">Rated</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/2">
            <div className="flex items-center justify-center rounded-full text-4xl font-bold font-ibm">
              {props.numOfFavMovies}
            </div>
            <div className="">
              <p className="mx-2">Favorite</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/2">
            <div className="flex items-center justify-center rounded-full text-4xl font-bold font-ibm">
              {props.numOfMoviesInWatchlist}
            </div>
            <div className="">
              <p className="mx-2">In Watchlist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-3">
        <p className="">Shows</p>
        <div className="flex flex-col lg:flex-row w-full my-2">
          <div className="flex items-center lg:w-1/2">
            <div className="flex items-center justify-center rounded-full text-4xl font-bold font-ibm">
              {props.numOfRatedShows}
            </div>
            <div className="">
              <p className="mx-2">Rated</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/2">
            <div className="flex items-center justify-center rounded-full text-4xl font-bold font-ibm">
              {props.numOfFavShows}
            </div>
            <div className="">
              <p className="mx-2">Favorite</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/2">
            <div className="flex items-center justify-center rounded-full text-4xl font-bold font-ibm">
              {props.numOfShowsInWatchList}
            </div>
            <div className="">
              <p className="mx-2">In Watchlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
