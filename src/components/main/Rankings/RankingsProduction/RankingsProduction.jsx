import { useEffect, useState } from "react/cjs/react.development";
import * as constants from "../../../../constants";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosArrowDropup } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RankingsProduction(props) {
  const rankingType = props.rankingType;
  const [revenue, setRevenue] = useState(0);

  const [rankingIconElement, setRankingIconElement] = useState(<p>element</p>);
  const [rankingValueElement, setRankingValueElement] = useState(
    <p>element</p>
  );

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const fetchRevenue = async () => {
      const data = await fetch(
        `${constants.TMDB_BASE_PATH}movie/${props.id}?api_key=${constants.API_KEY}`
      );
      const jsonData = await data.json();
      let revenue = jsonData.revenue;
      let appendix = "";
      if (revenue > 1000000000) {
        revenue = revenue / 1000000000;
        appendix = "B";
      } else if (revenue >= 1000000) {
        revenue = revenue / 1000000;
        appendix = "M";
      }

      setRevenue((formatter.format(revenue) + appendix).slice(1));
    };

    if (rankingType == "top-revenue") {
      fetchRevenue();
    }
  }, [props]);

  useEffect(() => {
    let iconElement;
    let valueElement;
    if (rankingType == "newest") {
      iconElement = (
        <IconContext.Provider value={{ color: "#FFE66D" }}>
          <AiOutlineCalendar className="w-4 h-4"></AiOutlineCalendar>
        </IconContext.Provider>
      );

      valueElement = (
        <p className="font-ibm font-bold text-xs">
          {props.releaseDate.slice(0, 4)}
        </p>
      );
    } else if (rankingType == "top-revenue") {
      iconElement = (
        <IconContext.Provider value={{ color: "#FFE66D" }}>
          <BsCurrencyDollar className="w-4 h-4"></BsCurrencyDollar>
        </IconContext.Provider>
      );

      valueElement = <p className="font-ibm font-bold text-xs">{revenue}</p>;
    } else if (rankingType == "top-rated") {
      iconElement = (
        <IconContext.Provider value={{ color: "#FFE66D" }}>
          <AiFillStar className="w-3 h-3"></AiFillStar>
        </IconContext.Provider>
      );

      valueElement = (
        <p className="font-ibm font-bold text-sm">
          {props.voteAverage != 0 ? props.voteAverage.toFixed(1) : "n/a"}
        </p>
      );
    } else if (rankingType == "most-popular") {
      iconElement = (
        <IconContext.Provider value={{ color: "#FFE66D" }}>
          <IoIosArrowDropup className="w-4 h-4"></IoIosArrowDropup>
        </IconContext.Provider>
      );
      valueElement = (
        <p className="font-ibm font-bold text-xs">
          {Math.floor(props.popularity)}
        </p>
      );
    }

    setRankingIconElement(iconElement);
    setRankingValueElement(valueElement);
  }, [props, revenue]);

  return (
    <Link to={`/movies/${props.id}`}>
      <motion.div
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: props.place * 0.04,
        }}
      >
        <Atropos className="rounded-lg" shadow={false} highlight={false}>
          <div className="relative rounded-md mb-6 w-28 md:w-40 cursor-pointer">
            <div className="bg-black absolute inset-0 blur-sm rounded-md"></div>
            <div className="relative bg-neutral-900 flex flex-col outline-2 border-neutral-800 rounded-md">
              <img className="rounded-md" src={props.posterPath}></img>

              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.8 }}
              >
                <div className="flex justify-between mx-1 font-lato">
                  {/* <div className="absolute -top-0 -left-0 bg-black rounded-md  border-neutral-700">
                  <p className="font-bold text-sm">{props.place}</p>
                </div> */}

                  <div className="absolute bg-opacity-70 justify-center -bottom-3 right-0 bg-black px-2 text-xs rounded-lg p-1 flex items-center">
                    {rankingIconElement}
                    {rankingValueElement}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Atropos>
      </motion.div>
    </Link>
  );
}
