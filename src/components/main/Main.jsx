import React from "react";
import MovieHero from "./MovieHero/MovieHero";
import MovieHeroLogged from "./MovieHero/MovieHeroLogged";
import MoviePage from "./MoviePage/MoviePage.jsx";
import SiteOverview from "./SiteOverview/SiteOverview";
import MovieShowcase from "./MovieShowcase/MovieShowcase";
import Collections from "./Collections/Collections";
import { LoggedContext } from "../Context/Context";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Main() {
  const authContext = useContext(LoggedContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
