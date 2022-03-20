import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./components/main/MoviePage/MoviePage";
import SearchingResults from "./components/main/SearchingResults/SearchingResults";
import AllReviews from "./components/main/MoviePage/Reviews/AllReviews/AllReviews";
import Rankings from "./components/main/Rankings/Rankings";
import PersonPage from "./components/main/PersonPage/PersonPage";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import People from "./components/main/People/People";
import Shows from "./components/main/Shows/Shows";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/movies">
        <Route path=":movieId" element={<MoviePage />}></Route>
      </Route>
      <Route path="/reviews">
        <Route exact path=":reviewMovieId" element={<AllReviews />}></Route>
      </Route>
      <Route path="/results">
        <Route path=":query" element={<SearchingResults />}></Route>
      </Route>
      <Route path="/person">
        <Route path=":personId" element={<PersonPage />}></Route>
      </Route>
      <Route path="/films" element={<Rankings />}></Route>
      <Route path="/people" element={<People />}></Route>
      <Route path="/shows" element={<Shows></Shows>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
