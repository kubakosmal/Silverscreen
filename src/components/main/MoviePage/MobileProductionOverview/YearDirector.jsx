export default function YearDirector(props) {
  return (
    <div className="flex justify-center flex-wrap gap-1 text-xl">
      <p>{props.releaseDate.slice(0, 4)} • Directed by</p>

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
