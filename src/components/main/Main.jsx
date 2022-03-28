import React from "react";
import MovieHero from "./MovieHero/MovieHero";
import PopularMoviesList from "./Collections/PopularMoviesList/PopularMoviesList";
import MoviePage from "./MoviePage/MoviePage.jsx";
import SiteOverview from "./SiteOverview/SiteOverview";
import MovieShowcase from "./MovieShowcase/MovieShowcase";
import PopularTVShows from "./PopularTVShows/PopularTVShows";

class Main extends React.Component {
  render() {
    return (
      <div className=" mx-auto  text-primary">
        <MovieHero></MovieHero>
        <div className="max-w-4/5 mx-auto">
          <MovieShowcase></MovieShowcase>
          <SiteOverview></SiteOverview>
          <PopularMoviesList></PopularMoviesList>
          <PopularTVShows></PopularTVShows>
        </div>
      </div>
    );
  }
}

export default Main;
