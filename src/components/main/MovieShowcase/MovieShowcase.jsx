import * as constants from "../../../constants";
import { useState, useEffect } from "react";
import MoviePoster from "../Collections/PopularMoviesList/MoviePoster/MoviePoster";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MovieShowcase() {
  const [data, setData] = useState([]);
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
    <div className="mx-auto max-w-5xl lg:my-10 flex flex-wrap justify-around">
      {data.map((prod, i) => {
        if (i < 6 && prod.poster_path) {
          return (
            <div id={prod.id}>
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
                  <Atropos shadow={false} highlight={false}>
                    <div className="relative my-3 w-24 lg:w-40 cursor-pointer rounded-md">
                      <div className="absolute bg-black inset-0 blur rounded-lg"></div>
                      <div className="relative rounded-md border-2 border-neutral-800">
                        <img
                          className="rounded-md"
                          src={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
                        ></img>
                      </div>
                    </div>
                  </Atropos>
                </motion.div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
}
