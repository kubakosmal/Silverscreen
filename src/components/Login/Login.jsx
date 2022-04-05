import Header from "../header/Header";
import * as constants from "../../constants";
import { useEffect, useState, useContext } from "react";
import { LoggedContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { ReactComponent as TmdbSvg } from "../main/SiteOverview/SilverscreenOverview/tmdblogo.svg";

export default function Login() {
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const tokenData = await fetch(
        `${constants.TMDB_BASE_PATH}authentication/token/new?api_key=${constants.API_KEY}`
      );
      const jsonTokenData = await tokenData.json();

      setAuthToken(jsonTokenData.request_token);
    };

    fetchToken();
  }, []);

  return (
    <div>
      <Header noBackdrop={true} />
      <div className="max-w-4/5 my-5 mx-4 lg:mx-auto text-white flex flex-col">
        <h1 className="text-lg leading-8 lg:text-2xl font-bold">
          You can Log In to Silverscreen, with Your{" "}
          <span>
            <TmdbSvg className="w-12 lg:w-20 mx-1 inline-block"></TmdbSvg>
          </span>{" "}
          account
        </h1>
        <div className="flex items-end my-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-black blur-sm"></div>

            <a
              href={`https://www.themoviedb.org/authenticate/${authToken}?redirect_to=http://localhost:3000/logged`}
              className="relative text-sm lg:text-lg p-2 px-4 rounded-lg bg-gradient-to-tr from-blue-500 to-teal-500"
            >
              Log In With TMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
