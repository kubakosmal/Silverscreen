import React from "react";
import MovieHero from "./MovieHero/MovieHero";
import MovieHeroLogged from "./MovieHero/MovieHeroLogged";
import MoviePage from "./MoviePage/MoviePage.jsx";
import SiteOverview from "./SiteOverview/SiteOverview";
import MovieShowcase from "./MovieShowcase/MovieShowcase";
import Collections from "./Collections/Collections";
import { LoggedContext } from "../Context/Context";
import { useContext } from "react";

/* class Main extends React.Component {
  render() {
    return (
      <div className="mx-auto mb-10 text-primary">
        <MovieHero></MovieHero>
        <div className="max-w-4/5 mx-auto">
          <MovieShowcase />
          <SiteOverview />
          <Collections />
        </div>
      </div>
    );
  }
} */

export default function Main() {
  const authContext = useContext(LoggedContext);
  return (
    <div className="mx-auto mb-10 text-primary">
      {authContext.isLogged ? <MovieHeroLogged /> : <MovieHero />}
      <div className="max-w-4/5 mx-auto">
        {authContext.isLogged ? false : <MovieShowcase />}
        {authContext.isLogged ? false : <SiteOverview />}
        <Collections />
      </div>
    </div>
  );
}
