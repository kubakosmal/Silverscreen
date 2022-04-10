import { useContext, useEffect, useState } from "react";
import Header from "../../header/Header";
import MovieHero from "../MovieHero/MovieHero";
import * as constants from "../../../constants";
import { LoggedContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function UserLoggedMain() {
  const [sessionId, setSessionId] = useState("");
  const [accountDetails, setAccountDetails] = useState({});
  const authContext = useContext(LoggedContext);

  const queryParams = new URLSearchParams(window.location.search);
  const requestToken = queryParams.get("request_token").toString();

  useEffect(() => {
    const fetchSessionId = async () => {
      const response = await fetch(
        `${constants.TMDB_BASE_PATH}authentication/session/new?api_key=${constants.API_KEY}&request_token=${requestToken}`,
        {
          method: "POST",
        }
      );
      const jsonResponse = await response.json();
      setSessionId(jsonResponse.session_id);
      authContext.setSessionId(jsonResponse.session_id);
      authContext.setIsLogged(true);
    };

    fetchSessionId();
  }, []);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}account?api_key=${constants.API_KEY}&session_id=${sessionId}`
      );
      const jsonData = await data.json();

      setAccountDetails(jsonData);
      authContext.setUserId(jsonData.id);
      authContext.setUserName(jsonData.username);
      authContext.setUserProfilePath(
        `${constants.IMAGES_BASE_PATH}w500${jsonData.avatar.tmdb.avatar_path}`
      );
    };

    if (sessionId) {
      fetchAccountDetails();
    }
  }, [sessionId]);

  return (
    <div>
      <Header noBackdrop={true} />

      <div className="max-w-4/5 mx-4 lg:mx-auto text-white">
        <div className="my-5">
          <h1 className="font-bold text-2xl">
            Welcome{" "}
            <span className="text-secondary">{accountDetails.username}</span>
          </h1>
          <div className="flex gap-3 mt-5">
            <div className="border-2 p-2 px-4 hover:border-white bg-blue-600 text-whote transition-all duration-200 border-transparent rounded-md">
              <Link to={`/`}>
                <h2 className="font-bold">Homepage</h2>
              </Link>
            </div>
            <div>
              <Link to={"/user"}>
                <div className="border-2 p-2 px-4 border-crayola text-crayola hover:text-white hover:border-white transition-all duration-200 rounded-md">
                  <h2 className="font-bold">User Page</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
