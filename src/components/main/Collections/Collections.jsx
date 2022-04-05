import PopularTVShows from "./PopularTVShows/PopularTVShows";
import PopularMoviesList from "./PopularMoviesList/PopularMoviesList";
import Upcoming from "./Upcoming/Upcoming";
import TopRatedTVShows from "./TopRatedTVShows/TopRatedTVShows";
import TopRatedMovies from "./TopRatedMovies/TopRatedMovies";

export default function Collections() {
  return (
    <div>
      <PopularMoviesList />
      <PopularTVShows />
      <Upcoming />
      <TopRatedMovies />
      <TopRatedTVShows />
    </div>
  );
}
