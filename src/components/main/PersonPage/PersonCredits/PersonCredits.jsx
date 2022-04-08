import MoviePoster from "../../Collections/PopularMoviesList/MoviePoster/MoviePoster";
import * as constants from "../../../../constants";
import { useState } from "react";
import PersonProductionInfo from "../PersonProductionInfo/PersonProductionInfo";

const sortBy = (productions, type, sortByWhat) => {
  let arrToSort = productions;
  let sortBy;

  if (sortByWhat == "release") {
    sortBy = type == "movie" ? "release_date" : "first_air_date";
    for (let j = 0; j < arrToSort.length; j++) {
      for (let i = 0; i < arrToSort.length - j - 1; i++) {
        let firstDate = parseInt(arrToSort[i][sortBy].slice(0, 4), 10);
        let secondDate = parseInt(arrToSort[i + 1][sortBy].slice(0, 4), 10);

        if (firstDate < secondDate) {
          let secondElementTemp = arrToSort[i + 1];
          arrToSort[i + 1] = arrToSort[i];
          arrToSort[i] = secondElementTemp;
        }
      }
    }
  } else {
    sortBy = "vote_count";
    for (let j = 0; j < arrToSort.length; j++) {
      for (let i = 0; i < arrToSort.length - j - 1; i++) {
        let firstDate = parseInt(arrToSort[i][sortBy], 10);
        let secondDate = parseInt(arrToSort[i + 1][sortBy], 10);

        if (firstDate < secondDate) {
          let secondElementTemp = arrToSort[i + 1];
          arrToSort[i + 1] = arrToSort[i];
          arrToSort[i] = secondElementTemp;
        }
      }
    }
  }

  return arrToSort;
};

export default function PersonCredits(props) {
  let filmsStarred = props.filmsStarred;
  let showsStarred = props.showsStarred;
  let bestKnownFor = props.filmsStarred;

  // filter for productions only with release date
  filmsStarred = filmsStarred.filter((prod) => prod.release_date);
  showsStarred = showsStarred.filter((prod) => prod.first_air_date);

  // sort by release date
  if (props.filmsStarred) {
    filmsStarred = sortBy(filmsStarred, "movie", "release");
    bestKnownFor = sortBy(bestKnownFor, "movie", "voteCount");
  }

  if (props.showsStarred) {
    showsStarred = sortBy(showsStarred, "show", "release");
  }

  const [typeOfMedia, setTypeOfMedia] = useState("films");
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center">
          <h3 className="font-bold font-lato text-secondary whitespace-nowrap mb-1">
            BEST KNOWN FOR
          </h3>
          <div className="h-1 w-full rounded-full bg-secondary ml-2"></div>
        </div>

        <div className="relative flex bg-neutral-900 rounded-md">
          {bestKnownFor.map((prod, i) => {
            if (i < 4) {
              return (
                <MoviePoster
                  type={"movies"}
                  movieId={prod.id}
                  posterImageUrl={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
                />
              );
            }
          })}
        </div>
      </div>

      <div className="">
        <h3 className="font-lato  text-gray-200">STARRING</h3>
        <h3 className="leading-5 text-xl font-bold font-lato text-white">
          {props.name}
        </h3>
      </div>

      <div className="flex mt-4 mb-1">
        <div>
          <input
            defaultChecked={true}
            className="hidden peer"
            type="radio"
            id="films"
            value="films"
            name="media-type"
            onClick={(e) => {
              setTypeOfMedia(e.target.value);
            }}
          ></input>
          <label
            for="films"
            className="hover:text-secondary font-lato font-bold cursor-pointer peer-checked:underline peer-checked:text-secondary"
          >
            Films
          </label>
        </div>

        <input
          className="hidden peer"
          type="radio"
          value="tv-shows"
          name="media-type"
          id="tv-shows"
          onClick={(e) => setTypeOfMedia(e.target.value)}
        ></input>
        <label
          for="tv-shows"
          className="hover:text-secondary font-lato font-bold mx-2 cursor-pointer peer-checked:underline peer-checked:text-secondary"
        >
          TV Shows
        </label>
      </div>

      <div className="relative flex flex-col border-neutral-800">
        <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
        <div className="relative bg-neutral-900 border border-neutral-800 rounded-md px-2">
          {typeOfMedia == "films"
            ? filmsStarred.map((film) => {
                if (film.poster_path) {
                  return (
                    <div className="">
                      <PersonProductionInfo
                        genreIds={film.genre_ids}
                        id={film.id}
                        mediaType={film.media_type}
                        title={film.title}
                        voteAverage={film.vote_average}
                        releaseDate={film.release_date}
                      />
                    </div>
                  );
                }
              })
            : showsStarred.map((show) => {
                if (show.poster_path) {
                  return (
                    <div className="">
                      <PersonProductionInfo
                        id={show.id}
                        mediaType={show.media_type}
                        title={show.name}
                        voteAverage={show.vote_average}
                        releaseDate={show.first_air_date}
                      />
                    </div>
                  );
                }
              })}
        </div>

        <p className="text-white"></p>
      </div>
    </div>
  );
}
