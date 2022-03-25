import { Link } from "react-router-dom";

const MoviePoster = (props) => {
  return (
    <div className="p-1 border-2 border-transparent rounded-md  hover:border-secondary">
      <Link to={`/${props.type}/${props.movieId}`} key={props.movieId}>
        <img className="shadow-2xl rounded-md" src={props.posterImageUrl}></img>
      </Link>

      <h1 className="truncate drop-shadow-xl mt-1 text-xs lg:text-sm text-stone-300 ">
        {props.movieTitle}
      </h1>
    </div>
  );
};

export default MoviePoster;
