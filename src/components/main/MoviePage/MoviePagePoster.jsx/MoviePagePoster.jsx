export default function MoviePagePoster(props) {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-0 bg-black blur-sm"></div>
      <img
        className="relative shadow-xl rounded-md border-2 border-neutral-800"
        src={props.posterImageUrl}
      ></img>
    </div>
  );
}
