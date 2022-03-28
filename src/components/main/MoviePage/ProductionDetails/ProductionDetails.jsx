import { BsDot } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

export default function ProductionDetails(props) {
  const languageFormatter = new Intl.DisplayNames(["en"], { type: "language" });
  const originalLanguage = languageFormatter.of(props.originalLanguage);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const budget = formatter.format(props.budget);
  const revenue = formatter.format(props.revenue);
  return (
    <div className="relative">
      <div className="bg-neutral-900 max-w-2xl shadow overflow-hidden sm:rounded-lg">
        <div>
          <dl>
            <div className="bg-slate-1000 rounded-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Original Title</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {props.originalTitle}
              </dd>
            </div>
            <div className="bg-neutral-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Original Language</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {originalLanguage}
              </dd>
            </div>

            <div className="bg-slate-1000 rounded-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-bold text-white">Release Date</dt>
              <dd className="mt-1 text-gray-300 sm:mt-0 sm:col-span-2">
                {props.releaseDate}
              </dd>
            </div>
            <div className="bg-neutral-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Budget</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {budget}
              </dd>
            </div>
            <div className="bg-slate-1000 rounded-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" font-bold text-white">Revenue</dt>
              <dd className="mt-1  text-gray-300 sm:mt-0 sm:col-span-2">
                {revenue}
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
