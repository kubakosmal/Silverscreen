export default function UserInfo(props) {
  return (
    <div className="w-full lg:mx-10 flex flex-col items-center lg:items-start text-gray-300">
      <div>
        <p className="text-gray-100 text-4xl font-bold font-lato">
          {props.userName}
        </p>
      </div>
      <div className="flex flex-col lg:my-5 mt-6 lg:flex-row w-full">
        <div className="flex items-center lg:w-1/2">
          <div className="relative">
            <div className="absolute rounded-full inset-0 bg-gradient-to-tr from-crayola to-pink-600 blur-sm"></div>
            <div className="bg-slate-1100 relative p-3 flex items-center justify-center rounded-full w-16 h-16 lg:w-20 lg:h-20 lg:text-4xl text-2xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-crayola to-pink-600 bg-clip-text text-transparent">
                {props.averageMovieRating}
              </p>
            </div>
          </div>

          <div className="mx-3">
            <p className="text-white font-lato text-lg lg:text-xl">
              Average Movie Rating
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-1/2 my-5 lg:my-0">
          <div className="relative">
            <div className="absolute rounded-full inset-0 bg-gradient-to-tr from-crayola to-pink-600 blur-sm"></div>
            <div className="bg-slate-1100 relative p-3 flex items-center justify-center rounded-full w-16 h-16 lg:w-20 lg:h-20 lg:text-4xl text-2xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-crayola to-pink-600 bg-clip-text text-transparent">
                {props.averageShowsRating}
              </p>
            </div>
          </div>
          <div className="mx-3">
            <p className="text-white font-lato text-lg lg:text-xl">
              Average Show Rating
            </p>
          </div>
        </div>
      </div>

      <div className="w-full my-3">
        <p className="font-bold font-lato text-xl border-b pb-1 border-neutral-800">
          Movies
        </p>
        <div className="flex flex-col lg:flex-row w-full my-2">
          <div className="flex items-center lg:w-1/3">
            <div className="flex items-center justify-center rounded-full text-3xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-secondary to-blue-600 bg-clip-text text-transparent">
                {props.numOfRatedMovies}
              </p>
            </div>
            <div className="">
              <p className="mx-2">Rated</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/3">
            <div className="flex items-center justify-center rounded-full text-3xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-secondary to-blue-600 bg-clip-text text-transparent">
                {props.numOfFavMovies}
              </p>
            </div>
            <div className="">
              <p className="mx-2">Favorite</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/3">
            <div className="flex items-center justify-center rounded-full text-3xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-secondary to-blue-600 bg-clip-text text-transparent">
                {props.numOfMoviesInWatchlist}
              </p>
            </div>
            <div className="">
              <p className="mx-2">In Watchlist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-3">
        <p className="font-bold font-lato text-xl border-b pb-1 border-neutral-800">
          Shows
        </p>
        <div className="flex flex-col lg:flex-row w-full my-2">
          <div className="flex items-center lg:w-1/3">
            <div className="flex items-center justify-center rounded-full text-3xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-secondary to-blue-600 bg-clip-text text-transparent">
                {props.numOfRatedShows}
              </p>
            </div>
            <div className="">
              <p className="mx-2">Rated</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/3">
            <div className="flex items-center justify-center rounded-full text-3xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-secondary to-blue-600 bg-clip-text text-transparent">
                {props.numOfFavShows}
              </p>
            </div>
            <div className="">
              <p className="mx-2">Favorite</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/3">
            <div className="flex items-center justify-center rounded-full text-3xl font-bold font-ibm">
              <p className="bg-gradient-to-tr from-secondary to-blue-600 bg-clip-text text-transparent">
                {props.numOfShowsInWatchlist}
              </p>
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
