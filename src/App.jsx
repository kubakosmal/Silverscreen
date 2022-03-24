import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviePoster from "./components/main/PopularMoviesList/MoviePoster/MoviePoster.jsx";
export const LoggedContext = React.createContext({
  sessionId: "sessionId",
  requestToken: "requestToken",
  isUserLogged: false,
});

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "atropos/css";

const Dupsko = () => {
  return (
    <div>
      <LoggedContext.Consumer>{(ctx) => {}}</LoggedContext.Consumer>
    </div>
  );
};

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [requestToken, setRequestToken] = useState("");

  return (
    <div className="max-w-full md: lg:mx-auto relative font-oxygen">
      <Header></Header>
      <div className="lg:mx-auto mx-4">
        <Main></Main>
      </div>
    </div>
  );
};

export default App;
