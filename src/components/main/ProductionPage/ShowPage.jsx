import Header from "../../header/Header";
import * as constants from "../../../constants";
import { useParams, useLocation } from "react-router-dom";
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
import ShowDetails from "./ShowDetails/ShowDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import Recommendations from "./Reccomendations/Recommendations";

export default function ShowPage() {
  const params = useParams();
  const prodId = params.prodId;
  const location = useLocation();

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
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  useEffect(() => {
    const fetchShowData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}tv/${prodId}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();

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
        `${constants.TMDB_BASE_PATH}tv/${prodId}/credits?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();

      setActors(jsonData.cast);
    };

    const fetchReviews = async () => {
      const getReviews = await fetch(
        `${constants.TMDB_BASE_PATH}/tv/${prodId}/reviews?api_key=${constants.API_KEY}`
      );

      const jsonData = await getReviews.json();
      setReviews(jsonData.results);
    };

    fetchReviews();
    fetchActors();
    fetchShowData();
  }, [prodId]);
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <div>
        <MovieBackdrop
          backdropImageUrl={
            constants.IMAGES_BASE_PATH + "original" + data.backdrop_path
          }
        />
        <div className="relative">
          <div className="relative max-w-4/5 mx-4 gap-y-5 gap-x-12 mb-10 -mt-12 grid grid-cols-1 lg:grid-cols-11 lg:mx-auto lg:grid-rows-[auto_auto]">
            <div className="lg:row-start-1 lg:col-start-1 lg:col-end-4 lg:row-span-2 lg:sticky lg:top-5 flex lg:block items-center justify-center">
              <MoviePagePoster
                posterImageUrl={
                  constants.IMAGES_BASE_PATH + "w500" + data.poster_path
                }
              />

              <div className="mt-5 hidden lg:block">
                <Providers id={prodId} type="tv" />
              </div>
            </div>

            <div className="lg:col-start-4 lg:col-end-12 lg:row-start-1 lg:row-end-2">
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

            <div className="lg:col-start-9  lg:col-end-12 lg:row-start-2 lg:row-end-3">
              <div className="flex items-center mb-2">
                <h3 className="text-crayola text-md font-bold font-lato whitespace-nowrap">
                  SCORE
                </h3>
                <div className="w-full h-1 ml-2 rounded-full bg-crayola"></div>
              </div>
              <div className="relative rounded-lg">
                <div className="absolute bg-black inset-0 blur-sm rounded-xl"></div>
                <div className="relative bg-neutral-900 rounded-xl">
                  <div className="bg-slate-1000 rounded-xl">
                    <RatingAndInteractions
                      rating={rating}
                      type={"tv"}
                      prodId={prodId}
                    />
                    <Indicators type="tv" prodId={prodId} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-start-4  lg:col-end-9 lg:row-start-2 lg:row-end-3 flex flex-col gap-10">
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-secondary text-md font-bold font-lato">
                    OVERVIEW
                  </h3>
                  <div className="w-full h-1 ml-2 bg-secondary rounded-full"></div>
                </div>

                <div className="relative bg-neutral-900 rounded-lg">
                  <div className="absolute bg-black inset-0 blur-sm rounded-lg"></div>
                  <div className="relative bg-neutral-900 rounded-lg">
                    <div className="rounded-lg">
                      <div className="p-5 rounded-lg bg-neutral-900">
                        <ProductionDescription
                          overview={overview}
                          tagline={tagline}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-secondary text-md font-bold font-lato">
                    DETAILS
                  </h3>
                  <div className="w-full h-1 ml-2 rounded-full bg-secondary"></div>
                </div>
                <div className="relative rounded-lg">
                  <div className="absolute bg-black inset-0 blur-sm rounded-lg"></div>
                  <div className="relative rounded-lg">
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
              </div>
            </div>

            <div className="lg:col-start-4 lg:col-end-12  lg:row-start-4 lg:row-end-5">
              <Cast actors={actors} type="tv" prodId={prodId}></Cast>
            </div>

            {reviews.length > 0 ? (
              <div className="lg:col-start-4 lg:col-end-12  lg:row-start-5 lg:row-end-6">
                <Reviews reviews={reviews} prodId={prodId} type="tv" />
              </div>
            ) : (
              false
            )}

            {recommendations.length > 0 ? (
              <div className="lg:col-start-4 lg:col-end-12  lg:row-start-6 lg:row-end-7">
                <Recommendations type="tv" productions={recommendations} />
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
