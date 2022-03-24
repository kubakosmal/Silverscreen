import Header from "../../header/Header";
import * as constants from "../../../constants";
import { useParams } from "react-router-dom";
import { LoggedContext } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import MoviePagePoster from "./MoviePagePoster.jsx/MoviePagePoster";
import Indicators from "./Indicators/Indicators";
import MovieBackdrop from "./MovieBackdrop/MovieBackdrop";
import Providers from "./Providers/Providers";
import DesktopProductionOverview from "./DesktopProductionOverview/DesktopProductionOverview";
import MobileProductionOverview from "./MobileProductionOverview/MobileProductionOverview";
import RatingAndInteractions from "./RatingAndInteractions/RatingAndInteractions";
import ProductionDescription from "./ProductionDescription/ProductionDescription";
import Keywords from "./Keywords/Keywords";
import ShowDetails from "./ShowDetails/ShowDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export default function ShowPage() {
  const params = useParams();
  const showId = params.showId;

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const mobileOrDesktop = screenSize >= 768 ? "desktop" : "mobile";

  const authContext = useContext(LoggedContext);

  const [data, setData] = useState([]);
  const [showName, setShowName] = useState("Show name");
  const [originalName, setOriginalName] = useState("Original name");
  const [firstAirDate, setFirstAirDate] = useState("First air date");
  const [lastAirDate, setLastAirDate] = useState("Last air date");
  const [creators, setCreators] = useState(["creator"]);
  const [popularity, setPopularity] = useState("popularity");
  const [rating, setRating] = useState("Rating");
  const [runtime, setRuntime] = useState("Runtime");
  const [voteCount, setVoteCount] = useState("Vote count");
  const [overview, setOverview] = useState("Overview");
  const [tagline, setTagline] = useState("Tagline");
  const [genres, setGenres] = useState([]);
  const [numOfEpisodes, setNumOfEpisodes] = useState("num of episodes");
  const [numOfSeasons, setNumOfSeasons] = useState("num of seasons");
  const [country, setCountry] = useState("country");
  const [seasons, setSeasons] = useState([]);
  const [originalLanguage, setOriginalLanguage] = useState("en");
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  useEffect(() => {
    const fetchShowData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}tv/${showId}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      console.log(jsonData);

      console.log(jsonData);
      setData(jsonData);
      setShowName(jsonData.name);
      setOriginalName(jsonData.original_name);
      setFirstAirDate(jsonData.first_air_date);
      setPopularity(jsonData.popularity);
      setRating(jsonData.vote_average);
      setRuntime(jsonData.episode_run_time);
      setVoteCount(jsonData.vote_count);
      setCreators(jsonData.created_by.map((creator) => creator.name));
      setOverview(jsonData.overview);
      setTagline(jsonData.tagline);
      setGenres(jsonData.genres);
      setNumOfEpisodes(jsonData.number_of_episodes);
      setNumOfSeasons(jsonData.number_of_seasons);
      setCountry(jsonData.origin_country);
      setOriginalLanguage(jsonData.original_language);
      setSeasons(jsonData.seasons);
      setLastAirDate(jsonData.last_air_date);
    };

    const fetchActors = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}tv/${showId}/credits?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();

      setActors(jsonData.cast);
    };

    fetchActors();
    fetchShowData();
  }, []);
  return (
    <div>
      <Header></Header>
      <div>
        <MovieBackdrop
          backdropImageUrl={
            constants.IMAGES_BASE_PATH + "original" + data.backdrop_path
          }
        />
        <div className="relative">
          <div className="relative max-w-5xl mx-4 gap-y-7 gap-x-14 -mt-10 grid grid-cols-1 lg:grid-cols-8 lg:mx-auto lg:grid-rows-[40px_auto]">
            <div className="lg:row-start-1 lg:col-start-1 lg:col-end-3 lg:sticky lg:top-5 flex lg:block items-center justify-center">
              <MoviePagePoster
                posterImageUrl={
                  constants.IMAGES_BASE_PATH + "w500" + data.poster_path
                }
              />
              <div className="hidden lg:block">
                <Indicators type="tv" prodId={showId} />
              </div>
              <div className="mt-5 hidden lg:block">
                <Providers id={showId} type="tv" />
              </div>
            </div>

            <div className="lg:col-start-3 lg:col-end-9 lg:row-start-1 lg:row-end-2">
              {mobileOrDesktop === "mobile" ? (
                <MobileProductionOverview
                  backdropImageUrl={
                    constants.IMAGES_BASE_PATH + "w500" + data.backdrop_path
                  }
                  posterImageUrl={
                    constants.IMAGES_BASE_PATH + "w500" + data.poster_path
                  }
                  movieName={showName}
                  movieInformation={data}
                  directors={creators}
                  popularity={popularity}
                  rating={rating}
                  runtime={runtime}
                  releaseDate={firstAirDate}
                  type="tv"
                />
              ) : (
                <div className="">
                  <DesktopProductionOverview
                    movieName={showName}
                    releaseDate={firstAirDate}
                    directors={creators}
                    type="tv"
                  />
                </div>
              )}
            </div>

            <div className="lg:col-start-7 lg:col-end-9 lg:row-start-2 lg:row-end-3">
              <RatingAndInteractions
                rating={rating}
                type={"tv"}
                prodId={showId}
              />
            </div>

            <div className="lg:col-start-3 lg:col-end-7 lg:row-start-2 lg:row-end-3 mt-5 flex flex-col gap-5">
              <h3 className="text-gray-300 font-oxygen text-lg font-bold italic">
                {tagline.toUpperCase()}
              </h3>
              <div className="relative">
                <div className=""></div>
                <div className="relative rounded-md">
                  <div className="">
                    <ProductionDescription
                      overview={overview}
                      tagline={tagline}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <Keywords type="tv" id={showId} />
              </div>
              <div>
                <h3 className="text-gray-200 text-lg font-bold font-oxygen">
                  Details
                </h3>
                <ShowDetails
                  originalName={originalName}
                  firstAirDate={firstAirDate}
                  lastAirDate={lastAirDate}
                  genres={genres}
                  numOfEpisodes={numOfEpisodes}
                  country={country}
                  originalLanguage={originalLanguage}
                  numOfSeasons={numOfSeasons}
                />
              </div>
            </div>

            <div className="lg:col-start-3 lg:col-end-9  lg:row-start-4 lg:row-end-5">
              <Cast actors={actors}></Cast>
            </div>

            <div className="lg:col-start-3 lg:col-end-9  lg:row-start-5 lg:row-end-6">
              <Reviews reviews={reviews} movieId={showId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
