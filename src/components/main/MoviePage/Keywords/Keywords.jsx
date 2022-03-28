import { useState, useEffect } from "react";
import * as constants from "../../../../constants";

export default function Keywords(props) {
  const [movieKeywords, setMovieKeywords] = useState([]);

  useEffect(() => {
    const fetchKeywords = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}${props.type}/${props.id}/keywords?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();
      console.log(jsonData);
      setMovieKeywords(
        props.type == "tv" ? jsonData.results : jsonData.keywords
      );
    };

    if (props.id) {
      fetchKeywords();
    }
  }, [props.id]);
  return (
    <div className="flex flex-wrap">
      {movieKeywords?.map((keyword, i) => {
        return (
          <div className="relative" key={i}>
            <div className=""></div>
            <div className="relative bg-neutral-900 border-2 shadow-xl border-slate-600 text-gray-300 font-lato m-1 rounded-xl cursor-pointer text-xs px-2 py-1">
              <p>{keyword.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
