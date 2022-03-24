import React, { useEffect, useState } from "react";
import MoviePoster from "./MoviePoster/MoviePoster.jsx";
import * as constants from "../../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper";

const PopularMoviesList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const myData = await fetch(
        `${constants.TMDB_BASE_PATH}movie/popular?api_key=${constants.API_KEY}`
      );
      const jsonData = await myData.json();
      setData(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-2 lg:my-10">
      <h2 className=" my-1 self-start text-primary drop-shadow-xl text-lg lg:text-xl font-medium">
        POPULAR MOVIES
      </h2>
      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          850: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1180: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((movie, i) => {
          return (
            <div id={movie.id}>
              <SwiperSlide>
                <div className="">
                  <MoviePoster
                    posterImageUrl={
                      constants.IMAGES_BASE_PATH + "w500" + movie.poster_path
                    }
                    movieTitle={movie.title}
                    movieId={movie.id}
                    key={movie.id}
                    type={"movies"}
                  />
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularMoviesList;
