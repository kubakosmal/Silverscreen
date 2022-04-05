import React from "react";
import MovieHero from "./MovieHero/MovieHero";

import MoviePage from "./MoviePage/MoviePage.jsx";
import SiteOverview from "./SiteOverview/SiteOverview";
import MovieShowcase from "./MovieShowcase/MovieShowcase";

import Collections from "./Collections/Collections";

class Main extends React.Component {
  render() {
    return (
      <div className="mx-auto mb-10  text-primary">
        <MovieHero></MovieHero>
        <div className="max-w-4/5 mx-auto">
          <MovieShowcase />
          <SiteOverview />
          <Collections />
        </div>
      </div>
    );
  }
}

export default Main;
