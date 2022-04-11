import { useLocation, useParams } from "react-router-dom";
import Header from "../../../header/Header";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import * as constants from "../../../../constants";

export default function WholeCollection() {
  const collectionId = useParams().collectionId;
  const prodId = useParams().prodId;
  const [collectionData, setCollectionData] = useState({});
  const [prodData, setProdData] = useState({});

  useEffect(() => {
    const fetchCollectionData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}collection/${collectionId}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      setCollectionData(jsonData);
    };

    const fetchProdData = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}movie/${prodId}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();

      setProdData(jsonData);
    };

    fetchProdData();
    fetchCollectionData();
  }, []);
  return (
    <div>
      <Header noBackdrop={true} />
      <div className="max-w-4/5 mx-4 lg:mx-auto my-5">
        <Link to={`/movies/${prodData.id}`}>
          <div className="flex items-center">
            <IconContext.Provider value={{ color: "white" }}>
              <MdKeyboardArrowLeft className="w-7 lg:w-9 h-7 lg:h-9 lg:-ml-2 -ml-1"></MdKeyboardArrowLeft>
            </IconContext.Provider>

            <h3 className="text-white text-md lg:text-lg">
              Return to{" "}
              <span className="text-secondary text-lg lg:text-xl underline">
                {prodData.title}
              </span>
            </h3>
          </div>
        </Link>
        <div className="flex gap-5 my-5">
          {collectionData?.parts?.map((prod) => {
            return (
              <Link to={`/movies/${prod.id}`}>
                <div className="w-24 lg:w-40">
                  <div className="relative rounded-md">
                    <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
                    <div className="overflow-hidden relative rounded-md border-2 border-neutral-700 hover:border-secondary transition-all duration-200">
                      <img
                        className="hover:scale-110 transition-all duration-200 w-24 lg:w-40 rounded-md"
                        src={`${constants.IMAGES_BASE_PATH}w500${prod.poster_path}`}
                      ></img>
                    </div>
                  </div>
                  <p className="text-gray-100 my-1 font-bold truncate">
                    {prod.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
