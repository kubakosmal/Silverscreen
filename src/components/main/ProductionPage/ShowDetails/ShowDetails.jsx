export default function ShowDetails(props) {
  const languageFormatter = new Intl.DisplayNames(["en"], { type: "language" });
  const originalLanguage = languageFormatter.of(props.originalLanguage);
  return (
    <div className="relative rounded-lg mt-2">
      <div className="bg-neutral-900 max-w-2xl shadow overflow-hidden rounded-lg">
        <div>
          <dl>
            <div className="bg-slate-1000 rounded-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Original Title</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {props.originalName}
              </dd>
            </div>
            <div className="bg-slate-1000 rounded-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Language</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {originalLanguage}
              </dd>
            </div>
            <div className="bg-neutral-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">First Air Date</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {props.firstAirDate}
              </dd>
            </div>

            <div className="bg-slate-1000 rounded-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-bold text-white">Last Air Date</dt>
              <dd className="mt-1 text-gray-300 sm:mt-0 sm:col-span-2">
                {props.lastAirDate}
              </dd>
            </div>
            <div className="bg-neutral-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Seasons</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {props.numOfSeasons}
              </dd>
            </div>
            <div className="bg-slate-1000 rounded-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Episodes</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {props.numOfEpisodes}
              </dd>
            </div>
            <div className="bg-neutral1000 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Genre</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {props.genres.map((genre, i) => {
                  if (i + 1 === props.genres.length) {
                    return genre.name;
                  } else {
                    return genre.name + ", ";
                  }
                })}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
