import { BsDot } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

export default function MovieDetails(props) {
  console.log(props.genres);
  const languageFormatter = new Intl.DisplayNames(["en"], { type: "language" });
  const originalLanguage = languageFormatter.of(props.originalLanguage);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const budget = formatter.format(props.budget);
  const revenue = formatter.format(props.revenue);
  return (
    <div className="flex flex-col my-6 border-b-2 lg:border-transparent border-zinc-900">
      <div className=" flex text-sm flex-col rounded-md  border-zinc-800">
        <div className="text-gray-300 px-2 font-oxygen">
          <div className="flex flex-col my-2 border-b-2 border-zinc-900">
            <p className="font-bold text-md lg:text-lg">Original title </p>
            <p className="text-secondary text-xs lg:text-sm">
              {props.originalTitle}
            </p>
          </div>
          <div className="flex flex-col my-2 border-b-2 border-zinc-900">
            <p className="font-bold text-md lg:text-lg">Original Language </p>
            <p className="text-secondary text-xs lg:text-sm">
              {originalLanguage}
            </p>
          </div>

          <div className="flex flex-col my-2 border-b-2 border-zinc-900">
            <p className="font-bold text-md lg:text-lg">Budget </p>
            <p className="text-secondary text-xs lg:text-sm">{budget}</p>
          </div>
        </div>

        <div className="text-gray-300 px-2 rounded-md">
          <div className="flex flex-col border-b-2 border-zinc-900 ">
            <p className="font-bold text-md lg:text-lg">Release Date </p>
            <p className="text-secondary text-xs lg:text-sm">
              {props.releaseDate}
            </p>
          </div>
          <div className="flex flex-col my-2 border-b-2 border-zinc-900">
            <p className="font-bold text-md lg:text-lg">Genre </p>
            <div className="flex text-secondary text-xs lg:text-sm">
              {props.genres.map((genre, i) => {
                if (i + 1 === props.genres.length) {
                  return genre.name;
                } else {
                  return genre.name + ", ";
                }
              })}
            </div>
          </div>
          <div className="flex flex-col my-2 border-b-2 border-zinc-900">
            <p className="font-bold text-md">Revenue </p>
            <p className="text-secondary text-xs lg:text-sm">{revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
