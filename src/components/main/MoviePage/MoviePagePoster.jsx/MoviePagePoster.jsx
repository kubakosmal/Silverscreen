export default function MoviePagePoster(props) {
  return (
    <div className="relative w-64 -mt-10 lg:w-full">
      <div className="absolute -inset-0 bg-black blur-sm"></div>
      <img
        className="relative shadow-xl rounded-md border-2 border-neutral-800"
        src={props.posterImageUrl}
      ></img>
    </div>
  );
}
