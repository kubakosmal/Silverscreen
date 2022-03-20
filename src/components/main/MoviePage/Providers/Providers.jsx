import { useState, useEffect } from "react";
import justWatchLogo from "./justwatch.svg";
import * as constants from "../../../../constants";

export default function Providers(props) {
  const [productionProviders, setProductionProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}${props.type}/${props.id}/watch/providers?api_key=${constants.API_KEY}`
      );

      const jsonData = await data.json();

      setProductionProviders(jsonData.results.US);
    };

    if (props.id) {
      fetchProviders();
    }
  }, props.id);

  return (
    <div className="relative text-gray-200 text-xs font-istok     rounded-sm">
      <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
      <div className="relative border border-zinc-800 rounded-md">
        <div className="bg-zinc-800 p-2">
          <p className="font-sora text-white">Where to watch?</p>
        </div>

        <div className="bg-neutral-900">
          {productionProviders?.buy?.map((provider, i) => {
            if (i < 3) {
              return (
                <div className="flex items-center text-xs border-b-2 py-2 ml-2 border-zinc-800 bg-neutral-900">
                  <img
                    className="w-6 h-6 rounded-full "
                    src={`${constants.IMAGES_BASE_PATH}original${provider.logo_path}`}
                  ></img>
                  <p className="mx-2">{provider.provider_name}</p>
                </div>
              );
            }
          })}
          <div className="flex text-xs py-2 justify-center items-center">
            <p className="mr-2">All serices on</p>
            <a href="https://www.justwatch.com/">
              <img className="w-16 just-watch-logo" src={justWatchLogo}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
