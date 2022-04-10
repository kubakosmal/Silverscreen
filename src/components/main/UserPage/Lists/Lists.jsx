export default function Lists() {
  return (
    <div>
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
                <div className="relative w-40">
                  <div className="absolute inset-0 rounded-md bg-black blur-sm"></div>
                  <div className="relative">
                    <img
                      className="rounded-lg"
                      src={`${constants.IMAGES_BASE_PATH}w500${movie.poster_path}`}
                    ></img>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
