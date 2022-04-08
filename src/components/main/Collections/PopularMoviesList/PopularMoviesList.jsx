import React, { useEffect, useState } from "react";
import MoviePoster from "./MoviePoster/MoviePoster.jsx";
import * as constants from "../../../../constants";
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
    <div className="max-w-4/5 mx-auto my-5 lg:my-8">
      <div className="flex items-center whitespace-nowrap">
        <h2 className="my-1  self-start text-secondary drop-shadow-xl text-lg lg:text-xl font-bold">
          POPULAR MOVIES
        </h2>
        <div className="h-2 ml-2 bg-secondary w-full rounded-full"></div>
      </div>
      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          850: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
          1180: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={1}
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
