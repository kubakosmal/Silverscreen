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
    };
    fetchAccountDetails();
  }, [sessionId]);

  return (
    <div>
      <Header />
      <MovieHero />
      <div className="max-w-5xl mx-4 lg:mx-auto text-gray-200">
        <p>You should be logged now</p>

        <p>Welcome {accountDetails.username}</p>
        <Link to={"/user"}>
          <div className="border p-2 px-4 rounded-md">
            <p>COME ON CLICK ME!!!!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}