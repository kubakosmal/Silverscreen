import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./components/main/MoviePage/MoviePage";
import SearchingResults from "./components/main/SearchingResults/SearchingResults";
import AllReviews from "./components/main/MoviePage/Reviews/AllReviews/AllReviews";
import Rankings from "./components/main/Rankings/Rankings";
import PersonPage from "./components/main/PersonPage/PersonPage";
import People from "./components/main/People/People";
import Shows from "./components/main/Shows/Shows";
import Login from "./components/Login/Login";
import UserLoggedMain from "./components/main/UserLoggedMain/UserLoggedMain";
import { LoggedContext, ModalContext } from "./components/Context/Context";
import UserPage from "./components/main/UserPage/UserPage";
import ShowPage from "./components/main/MoviePage/ShowPage";

const Index = () => {
  const [sessionId, setSessionId] = useState("id here");
  const [requestToken, setRequestToken] = useState("req here");
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(1);
  const [userName, setUserName] = useState("Username");
  const [userProfilePath, setUserProfilePath] = useState("Profile Path");

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <LoggedContext.Provider
      value={{
        sessionId: sessionId,
        requestToken: requestToken,
        isLogged: isLogged,
        userId: userId,
        userName: userName,
        userProfilePath,
        userProfilePath,
        setSessionId: (newId) => {
          setSessionId(newId);
        },
        setRequestToken: (newToken) => {
          setRequestToken(newToken);
        },
        setIsLogged: (isUserLogged) => {
          setIsLogged(isUserLogged);
        },
        setUserId: (newId) => {
          setUserId(newId);
        },
        setUserName: (name) => {
          setUserName(name);
        },
        setUserProfilePath: (profilePath) => {
          setUserProfilePath(profilePath);
        },
      }}
    >
      <ModalContext.Provider
        value={{
          isModalOpen: isModalOpen,
          setIsModalOpen: (value) => setIsModalOpen(value),
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/movies">
              <Route
                exact
                path=":movieId"
                element={<MoviePage key={window.location.pathname} />}
              ></Route>
            </Route>
            <Route path="/tvshows">
              <Route path=":showId" element={<ShowPage />}></Route>
            </Route>
            <Route path="/reviews">
              <Route
                exact
                path=":reviewMovieId"
                element={<AllReviews />}
              ></Route>
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
            <Route path="/login" element={<Login />} />
            <Route path="/logged" element={<UserLoggedMain />} />
            <Route path="/user" element={<UserPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ModalContext.Provider>
    </LoggedContext.Provider>
  );
};

ReactDOM.render(
  <Index />,

  document.getElementById("root")
);
