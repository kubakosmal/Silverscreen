import React from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviePoster from "./components/main/PopularMoviesList/MoviePoster/MoviePoster.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "atropos/css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="max-w-full mx-auto relative font-oxygen">
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;
