import Header from "../header/Header";
import * as constants from "../../constants";
import { useEffect, useState, useContext } from "react";
import { LoggedContext } from "../Context/Context";
import { Link } from "react-router-dom";

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
      <div className="max-w-4/5 my-5 mx-4 lg:mx-auto text-white">
        <h1>LOGIN HERE</h1>
        <a
          href={`https://www.themoviedb.org/authenticate/${authToken}?redirect_to=http://localhost:3000/logged`}
          className="border rounded-md p-2"
        >
          CLICK ME TO LOGIN!!!!
        </a>

        <Link to={"/shows"}>
          <p>LECYMY TU</p>
        </Link>
      </div>
    </div>
  );
}
