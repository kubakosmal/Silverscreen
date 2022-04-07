export default function DesktopProductionOverview(props) {
  return (
    <div className="text-white font-ibm flex flex-wrap drop-shadow-lg items-center mt-2 mb-2">
      <h2 className="font-bold text-4xl mr-1">{props.movieName}</h2>
      <h3 className="mx-1 font-lato text-lg">
        {props.releaseDate.slice(0, 4)}
      </h3>
      <div className="flex font-lato text-lg">
        <h3 className="mx-1">
          {props.type == "movie" ? "Directed" : "Created"} by
        </h3>
        <p className="text-secondary font-bold">
          {props.directors.map((director, i) => {
            if (i + 1 === props.directors.length) {
              return director;
            } else {
              return director + ", ";
            }
          })}
        </p>
      </div>
    </div>
  );
}
