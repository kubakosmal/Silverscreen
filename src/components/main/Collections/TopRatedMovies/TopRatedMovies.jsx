import { useEffect, useState } from "react";
import * as constants from "../../../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function TopRatedTVmovies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tvmoviesData = await fetch(
        `${constants.TMDB_BASE_PATH}movie/top_rated?api_key=${constants.API_KEY}`
      );

      const jsonData = await tvmoviesData.json();
      setData(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4/5 mx-auto my-5 lg:my-8">
      <div className="flex items-center whitespace-nowrap">
        <h2 className="my-1  self-start text-secondary drop-shadow-xl text-lg lg:text-xl font-bold">
          TOP RATED MOVIES
        </h2>
        <div className="h-2 ml-2 bg-secondary w-full rounded-full"></div>
      </div>
      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          850: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1180: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((movie, i) => {
          if (movie.backdrop_path) {
            return (
              <div key={movie.id.toString()}>
                <SwiperSlide>
                  <Link to={`/movies/${movie.id}`}>
                    <div className="border-2 p-2 rounded-md border-transparent hover:border-secondary">
                      <img
                        className="rounded-md"
                        src={
                          constants.IMAGES_BASE_PATH +
                          "w500" +
                          movie.backdrop_path
                        }
                      ></img>
                      <p>{movie.title}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
