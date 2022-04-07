import { useEffect, useState } from "react";
import * as constants from "../../../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function TopRatedTVShows() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tvShowsData = await fetch(
        `${constants.TMDB_BASE_PATH}discover/tv?api_key=${constants.API_KEY}&sort_by=popularity.desc&vote_count.gte=2000`
      );

      const jsonData = await tvShowsData.json();
      setData(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4/5 mx-auto my-5 lg:my-16">
      <div className="flex items-center whitespace-nowrap">
        <h2 className="my-1  self-start text-crayola drop-shadow-xl text-lg lg:text-xl font-bold">
          TOP RATED SHOWS
        </h2>
        <div className="h-2 ml-2 bg-crayola w-full rounded-full"></div>
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
        {data.map((show, i) => {
          if (show.poster_path) {
            return (
              <div key={show.id.toString()}>
                <SwiperSlide>
                  <Link to={`/tvshows/${show.id}`}>
                    <div className="border-2 p-2 rounded-md border-transparent hover:border-secondary transition-all duration-300">
                      <img
                        className="rounded-md"
                        src={
                          constants.IMAGES_BASE_PATH + "w500" + show.poster_path
                        }
                      ></img>
                      <p>{show.name}</p>
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
