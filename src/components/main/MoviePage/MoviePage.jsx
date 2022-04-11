import { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as constants from "../../../constants";
import MobileProductionOverview from "./MobileProductionOverview/MobileProductionOverview";
import DesktopProductionOverview from "./DesktopProductionOverview/DesktopProductionOverview";
import ProductionDescription from "./ProductionDescription/ProductionDescription";
import MovieImages from "./MovieImages/MovieImages";
import MovieBackdrop from "./MovieBackdrop/MovieBackdrop";
import Header from "../../header/Header";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import ProductionDetails from "./ProductionDetails/ProductionDetails";
import MoviePagePoster from "./MoviePagePoster.jsx/MoviePagePoster";
import Recommendations from "./Reccomendations/Recommendations";
import Indicators from "./Indicators/Indicators.jsx";
import Score from "./Score/Score";
import RatingAndInteractions from "./RatingAndInteractions/RatingAndInteractions";
import Genres from "./Genres/Genres";
import Keywords from "./Keywords/Keywords";
import Providers from "./Providers/Providers";
import { LoggedContext } from "../../Context/Context";
import Collection from "./Collection/Collection";

const MoviePage = () => {
  const params = useParams();
  const prodId = params.prodId;
  const location = useLocation();

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const mobileOrDesktop = screenSize >= 768 ? "desktop" : "mobile";

  const authContext = useContext(LoggedContext);

  const [data, setData] = useState([]);
  const [imagesUrls, setImagesUrls] = useState(["url"]);
  const [crew, setCrew] = useState([]);
  const [directors, setDirectors] = useState(["director"]);
  const [overview, setOverview] = useState("overview");
  const [popularity, setPopularity] = useState("popularity");
  const [rating, setRating] = useState("rating");
  const [runtime, setRuntime] = useState("runtime");
  const [releaseDate, setReleaseDate] = useState("Release Date");
  const [voteCount, setVoteCount] = useState("Vote Count");
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [genres, setGenres] = useState([]);
  const [originalTitle, setOriginalTitle] = useState("");
  const [originalLanguage, setOriginalLanguage] = useState("");
  const [revenue, setRevenue] = useState("");
  const [budget, setBudget] = useState("");
  const [tagline, setTagline] = useState("");
  const [id, setId] = useState();
  const [recommendations, setRecommndations] = useState([]);
  const [collection, setCollection] = useState(null);
  const [backdropPath, setBackdropPath] = useState("");
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${prodId}?api_key=${constants.API_KEY}`
      );
      const jsonData = await movieData.json();
      setData(jsonData);
      setOverview(jsonData.overview);
      setPopularity(jsonData.popularity);
      setRating(jsonData.vote_average);
      setRuntime(jsonData.runtime);
      setReleaseDate(jsonData.release_date);
      setVoteCount(jsonData.vote_count);
      setGenres(jsonData.genres);
      setOriginalTitle(jsonData.original_title);
      setOriginalLanguage(jsonData.original_language);
      setRevenue(jsonData.revenue);
      setBudget(jsonData.budget);
      setTagline(jsonData.tagline);
      setId(jsonData.id);
      setCollection(jsonData.belongs_to_collection);
      setBackdropPath(
        constants.IMAGES_BASE_PATH + "original" + jsonData.backdrop_path
      );
      setPosterPath(constants.IMAGES_BASE_PATH + "w500" + jsonData.poster_path);
    };

    const fetchImagesUrls = async () => {
      const fetchedUrls = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${prodId}/images?api_key=${constants.API_KEY}`
      );
      const jsonUrls = await fetchedUrls.json();
      setImagesUrls(jsonUrls.backdrops);
    };

    const fetchCrew = async () => {
      const getCrew = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${prodId}/credits?api_key=${constants.API_KEY}`
      );
      const jsonCrew = await getCrew.json();
      setCrew(jsonCrew);

      // get directors
      let filteredDirectors = [];
      jsonCrew.crew.forEach((member) =>
        member.job === "Director" ? filteredDirectors.push(member.name) : false
      );

      // get actors
      let actors = [];

      jsonCrew.cast.forEach((member) => {
        member.known_for_department === "Acting"
          ? actors.push({
              name: member.name,
              id: member.id,
              profile_path: member.profile_path,
              character: member.character,
            })
          : false;
      });

      setActors(actors);
      setDirectors(filteredDirectors);
    };

    const fetchReviews = async () => {
      const getReviews = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${prodId}/reviews?api_key=${constants.API_KEY}`
      );

      const jsonData = await getReviews.json();
      setReviews(jsonData.results);
    };

    const fetchRecommendations = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}movie/${prodId}/recommendations?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();

      setRecommndations(jsonData.results);
    };

    fetchRecommendations();
    fetchReviews();
    fetchData();
    fetchImagesUrls();
    fetchCrew();
  }, [prodId]);

  return (
    <div className="overflow-hidden">
      <Header></Header>
      <div className="">
        <MovieBackdrop opacity={1} backdropImageUrl={backdropPath} />
        <div className="relative">
          <div className="relative max-w-4/5 mx-4 gap-y-5 gap-x-12 mb-10 -mt-12 grid grid-cols-1 lg:grid-cols-11 lg:mx-auto lg:grid-rows-[auto_auto]">
            <div className="lg:row-start-1 lg:col-start-1 lg:col-end-4 lg:row-span-2 lg:sticky lg:top-5 flex lg:block items-center justify-center">
              <MoviePagePoster posterImageUrl={posterPath} />
              <div className="hidden lg:block"></div>

              {/* <div>
                <ProductionDetails
                  genres={genres}
                  originalTitle={originalTitle}
                  originalLanguage={originalLanguage}
                  revenue={revenue}
                  releaseDate={releaseDate}
                  budget={budget}
                ></ProductionDetails>
              </div> */}

              <div className="mt-5 hidden lg:block">
                <Providers type="movie" id={id} />
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
                  movieName={data.title}
                  movieInformation={data}
                  directors={directors}
                  popularity={popularity}
                  rating={rating}
                  runtime={runtime}
                  releaseDate={releaseDate}
                />
              ) : (
                <div className="">
                  <DesktopProductionOverview
                    movieName={data.title}
                    releaseDate={releaseDate}
                    directors={directors}
                    originalLanguage={originalLanguage}
                    runtime={runtime}
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
                      type={"movies"}
                      prodId={prodId}
                    />
                    <Indicators type="movies" prodId={prodId} />
                  </div>

                  {/* <Indicators type="movies" prodId={prodId}></Indicators> */}
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
                {/* 32414295 */}
                <div className="relative rounded-lg">
                  <div className="absolute bg-black inset-0 blur-sm rounded-lg"></div>
                  <div className="relative rounded-lg">
                    <ProductionDetails
                      genres={genres}
                      originalTitle={originalTitle}
                      originalLanguage={originalLanguage}
                      revenue={revenue}
                      releaseDate={releaseDate}
                      budget={budget}
                    ></ProductionDetails>
                  </div>
                </div>
              </div>
            </div>

            {/* <MovieImages imagesUrls={imagesUrls} /> */}

            <div className="lg:col-start-4 lg:col-end-12  lg:row-start-4 lg:row-end-5">
              <Cast actors={actors} prodId={prodId} type="movie"></Cast>
            </div>

            {reviews.length > 0 ? (
              <div className="lg:col-start-4 lg:col-end-12  lg:row-start-5 lg:row-end-6">
                <Reviews reviews={reviews} prodId={prodId} type="movie" />
              </div>
            ) : (
              false
            )}

            {collection ? (
              <div className="lg:col-start-4 lg:col-end-12  lg:row-start-6 lg:row-end-7">
                <Collection
                  backdropPath={`${constants.IMAGES_BASE_PATH}original${collection.backdrop_path}`}
                  title={collection.name}
                  id={collection.id}
                  prodId={prodId}
                />
              </div>
            ) : (
              false
            )}

            {recommendations.length > 0 ? (
              <div className="lg:col-start-4 lg:col-end-12  lg:row-start-7 lg:row-end-8">
                <Recommendations productions={recommendations} />
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
