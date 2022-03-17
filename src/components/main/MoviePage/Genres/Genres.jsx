export default function Genres(props) {
  return (
    <div className="flex text-gray-300 ">
      {props.genres.map((genre) => {
        return (
          <div className="border-2 rounded-3xl py-1 px-2 mx-1 text-xs  border-gray-300 cursor-pointer hover:bg-zinc-800">
            {genre.name}
          </div>
        );
      })}
    </div>
  );
}
