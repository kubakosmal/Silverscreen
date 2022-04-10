import { useEffect, useState } from "react";
import * as constants from "../../../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function PopularTVShows() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const tvShowsData = await fetch(
        `${constants.TMDB_BASE_PATH}tv/popular?api_key=${constants.API_KEY}`
      );

      const jsonData = await tvShowsData.json();
      setData(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4/5 mx-auto my-5 lg:my-8">
      <div className="flex items-center whitespace-nowrap">
        <h2 className="my-1  self-start text-crayola drop-shadow-xl text-lg lg:text-xl font-bold">
          POPULAR TV SHOWS
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
        {data?.map((show, i) => {
          if (show.backdrop_path) {
            return (
              <div className="" key={show.id}>
                <SwiperSlide>
                  <Link to={`/tvshows/${show.id}`}>
                    <div className="border-2 p-2 rounded-md border-transparent hover:border-secondary transition-all duration-300">
                      <img
                        className="rounded-md"
                        src={
                          constants.IMAGES_BASE_PATH +
                          "w342" +
                          show.backdrop_path
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
