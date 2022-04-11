import Header from "../header/Header";
import * as constants from "../../constants";
import { useEffect, useState, useContext } from "react";
import { LoggedContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { ReactComponent as TmdbSvg } from "../main/SiteOverview/tmdblogo.svg";

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
        <div className="relative rounded-lg max-w-xs mx-auto lg:mx-0">
          <div className="absolute bg-black inset-0 blur rounded-lg"></div>
          <div className="bg-neutral-900 border-2 border-neutral-700 relative rounded-lg p-8 flex flex-col items-center">
            <div>
              <TmdbSvg className="w-40 my-4"></TmdbSvg>
            </div>
            {/* <h1 className="text-center font-bold lg:text-3xl">Log In</h1> */}
            <div>
              <p className="lg:text-lg p-6 text-center">
                You can log in to Silverscreen using Your TMDB account.
              </p>
            </div>
            <div className="flex justify-center my-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-black blur-sm"></div>

                <a
                  href={`https://www.themoviedb.org/authenticate/${authToken}?redirect_to=http://silverscreen.jkosmal.com/logged`}
                  className="relative text-sm font-bold font-lato p-2 px-4 rounded-lg bg-blue-600 text-white hover:border-white border border-transparent transition-all duration-200"
                >
                  LOG IN WITH TMDB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
