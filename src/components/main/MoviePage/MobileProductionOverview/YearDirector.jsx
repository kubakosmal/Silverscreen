export default function YearDirector(props) {
  return (
    <div className="">
      <p>
        {props.releaseDate.slice(0, 4)} •{" "}
        {props.type == "movie" ? "Directed" : "Created"} by
      </p>

      <p>
        <span className="text-blue-jeans font-bold">
          {props.directors.map((director, i) =>
            i + 1 === props.directors.length ? director : director + ", "
          )}
        </span>
      </p>
    </div>
  );
}
