import * as constants from "../../../constants";
import { useState, useEffect } from "react";
import MoviePoster from "../Collections/PopularMoviesList/MoviePoster/MoviePoster";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MovieShowcase() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [data, setData] = useState([]);
  const [numOfMovies, setNumOfMovies] = useState(
    window.innerWidth < 450 ? 3 : window.innerWidth < 700 ? 4 : 5
  );

  useEffect(() => {
    setScreenSize(window.innerWidth);
    setNumOfMovies(
      window.innerWidth < 450 ? 3 : window.innerWidth < 700 ? 4 : 5
    );
  }, [window.innerWidth]);

  useEffect(() => {
    const fetchData = async () => {
      const myData = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${constants.API_KEY}`
      );
      const jsonData = await myData.json();
      setData(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-4/5 my-5 lg:my-10 flex flex-wrap justify-between">
      {data.map((prod, i) => {
        if (i < numOfMovies && prod.poster_path) {
          return (
            <div key={prod.id} id={prod.id}>
              <Link to={`movies/${prod.id}`}>
                <motion.div
                  animate={{
                    opacity: [0, 1],
                    scale: [0.8, 1],
                  }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: i * 0.3,
                  }}
                >
                  <div className="relative my-3 w-28 lg:w-40 cursor-pointer rounded-md overflow-clip border-2 border-neutral-700 hover:border-secondary transition-all duration-200">
                    <div className="absolute bg-black inset-0 blur rounded-lg "></div>
                    <div className="relative rounded-md ">
                      <img
                        className="rounded-md hover:scale-110 transition-all duration-200"
                        src={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
                      ></img>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
}
