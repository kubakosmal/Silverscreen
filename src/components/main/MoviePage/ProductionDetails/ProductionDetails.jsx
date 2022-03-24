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
    <div className="relative mt-2">
      <div className="absolute inset-0 bg-black blur-sm rounded-lg"></div>
      <div className="relative text-gray-200 flex border-2 flex-col text-sm rounded-lg bg-neutral-900 border-neutral-800 px-2">
        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">Original title </p>
          <p className="text-secondary mx-3 text-md">{props.originalTitle}</p>
        </div>
        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">Original Language </p>
          <p className="text-secondary mx-3 text-md">{originalLanguage}</p>
        </div>

        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">Budget </p>
          <p className="text-secondary mx-3 text-md">{budget}</p>
        </div>

        <div className="flex border-neutral-800  border-b py-3 justify-between items-center ">
          <p className="font-bold text-md lg:text-md">Release Date </p>
          <p className="text-secondary mx-3 text-md">{props.releaseDate}</p>
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
        <div className="flex border-neutral-800  border-b py-3 justify-between items-center">
          <p className="font-bold text-md lg:text-md">Revenue </p>
          <p className="text-secondary mx-3 text-md">{revenue}</p>
        </div>
      </div>
    </div>
  );
}
