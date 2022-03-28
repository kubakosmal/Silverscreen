import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

export default function PopularTVShows() {
  const [data, setData] = useState([]);

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
    <div className="max-w-4/5 mx-auto my-10">
      <h2 className="my-1  self-start text-primary drop-shadow-xl text-lg lg:text-xl font-medium">
        POPULAR TV SHOWS
      </h2>
      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          850: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1180: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((show, i) => {
          return (
            <div key={show.id.toString()}>
              <SwiperSlide>
                <Link to={`/tvshows/${show.id}`}>
                  <div className="mx-1">
                    <img
                      src={
                        constants.IMAGES_BASE_PATH + "w500" + show.backdrop_path
                      }
                    ></img>
                    <p>{show.name}</p>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
