export default function MoviePagePoster(props) {
  return (
    <div className="w-48 md:w-auto relative">
      <div className="absolute -inset-0 bg-black blur-sm"></div>
      <img
        className="relative shadow-xl rounded-md border-2 border-neutral-800"
        src={props.posterImageUrl}
      ></img>
    </div>
  );
}
