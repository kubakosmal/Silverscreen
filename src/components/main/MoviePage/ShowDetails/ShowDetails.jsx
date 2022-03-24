export default function ShowDetails(props) {
  const languageFormatter = new Intl.DisplayNames(["en"], { type: "language" });
  const originalLanguage = languageFormatter.of(props.originalLanguage);
  return (
    <div className="relative mt-2">
      <div className="absolute inset-0 bg-black blur-sm rounded-lg"></div>
      <div className="relative text-gray-200 flex border-2 flex-col text-sm rounded-lg bg-neutral-900 border-neutral-800 px-2">
        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">Original Title </p>
          <p className="text-secondary mx-3 text-md">{props.originalName}</p>
        </div>
        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">Original Language </p>
          <p className="text-secondary mx-3 text-md">{originalLanguage}</p>
        </div>

        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">First Air Date </p>
          <p className="text-secondary mx-3 text-md">{props.firstAirDate}</p>
        </div>

        {props.lastAirDate ? (
          <div className="flex border-neutral-800  border-b py-3 justify-between items-center ">
            <p className="font-bold text-md lg:text-md">Last Air Date </p>
            <p className="text-secondary mx-3 text-md">{props.lastAirDate}</p>
          </div>
        ) : (
          false
        )}

        <div className="flex border-neutral-800  border-b py-3 justify-between items-center ">
          <p className="font-bold text-md lg:text-md">Seasons </p>
          <p className="text-secondary mx-3 text-md">{props.numOfSeasons}</p>
        </div>
        <div className="flex border-neutral-800  border-b py-3 justify-between items-center ">
          <p className="font-bold text-md lg:text-md">Episodes </p>
          <p className="text-secondary mx-3 text-md">{props.numOfEpisodes}</p>
        </div>

        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">Genre </p>
          <div className="flex text-secondary mx-3 text-md">
            {props.genres.map((genre, i) => {
              if (i + 1 === props.genres.length) {
                return genre.name;
              } else {
                return genre.name + ", ";
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
