import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
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

const MoviePage = () => {
  const params = useParams();
  const movieId = params.movieId;

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${movieId}?api_key=${constants.API_KEY}`
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
    };

    const fetchImagesUrls = async () => {
      const fetchedUrls = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${movieId}/images?api_key=${constants.API_KEY}`
      );
      const jsonUrls = await fetchedUrls.json();
      setImagesUrls(jsonUrls.backdrops);
    };

    const fetchCrew = async () => {
      const getCrew = await fetch(
        `${constants.TMDB_BASE_PATH}/movie/${movieId}/credits?api_key=${constants.API_KEY}`
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
        `${constants.TMDB_BASE_PATH}/movie/${movieId}/reviews?api_key=${constants.API_KEY}`
      );

      const jsonData = await getReviews.json();
      setReviews(jsonData.results);
    };

    const fetchRecommendations = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}movie/${movieId}/recommendations?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();

      setRecommndations(jsonData.results);
    };

    fetchRecommendations();
    fetchReviews();
    fetchData();
    fetchImagesUrls();
    fetchCrew();
  }, []);

  return (
    <div className="">
      <Header></Header>
      <div className="">
        <MovieBackdrop
          opacity={1}
          backdropImageUrl={
            constants.IMAGES_BASE_PATH + "original" + data.backdrop_path
          }
        />
        <div className="relative">
          {/* <div className="absolute w-full h-1/4 mt-20  -green-500 lg:inset-0 lg:max-w-6xl mx-auto">
            <div className="absolute w-64 h-64 lg:w-60 lg:h-60 left-0 top-0 bg-radical-red rounded-full filter blur-3xl opacity-10 mix"></div>
            <div className="absolute w-64 h-64 lg:w-60 lg:h-60 bottom-0 right-0 bg-secondary rounded-full blur-3xl opacity-10"></div>
          </div> */}

          <div className="relative max-w-5xl mx-4 gap-y-7 gap-x-14 -mt-10 grid grid-cols-1 lg:grid-cols-8 lg:mx-auto lg:grid-rows-[40px_auto]">
            <div className="lg:row-start-1 lg:col-start-1 lg:col-end-3 lg:sticky lg:top-5 flex lg:block items-center justify-center">
              <MoviePagePoster
                posterImageUrl={
                  constants.IMAGES_BASE_PATH + "w500" + data.poster_path
                }
              />
              <div className="hidden lg:block">
                <Indicators type="movies" prodId={movieId} />
              </div>

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

            <div className="lg:col-start-3 lg:col-end-9 lg:row-start-1 lg:row-end-2">
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

            <div className="lg:col-start-7 lg:col-end-9 lg:row-start-2 lg:row-end-3">
              <RatingAndInteractions
                rating={rating}
                type={"movies"}
                prodId={movieId}
              />
            </div>

            {/* <div className="  lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-5">
              <ProductionDetails
                genres={genres}
                originalTitle={originalTitle}
                originalLanguage={originalLanguage}
                revenue={revenue}
                releaseDate={releaseDate}
                budget={budget}
              ></ProductionDetails>
            </div> */}

            {/* <div className="lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3 ">
              <Score />
            </div> */}

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
                <Keywords type="movie" id={id} />
              </div>
              <div>
                <h3 className="text-gray-200 text-lg font-bold font-oxygen">
                  Details
                </h3>
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

            {/* <MovieImages imagesUrls={imagesUrls} /> */}

            <div className="lg:col-start-3 lg:col-end-9  lg:row-start-4 lg:row-end-5">
              <Cast actors={actors}></Cast>
            </div>

            <div className="lg:col-start-3 lg:col-end-9  lg:row-start-5 lg:row-end-6">
              <Reviews reviews={reviews} movieId={movieId} />
            </div>

            <div className="lg:col-start-3 lg:col-end-9  lg:row-start-6 lg:row-end-7">
              <Recommendations productions={recommendations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
