import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieBackdrop(props) {
  const size = props.context === "main" ? "h-[28rem]" : "h-[18rem]";

  const [pxWindowHeight, setPxWindowHeight] = useState("lg:h-[500px]");

  useEffect(() => {
    setPxWindowHeight(`lg:h[${window.innerHeight.toString()}px]`);
  }, [window.innerWidth, window.innerHeight]);
  return (
    <div
      id="moviePageBackgroundImage"
      className={`${size} sm:h-[34rem] ${pxWindowHeight} rounded-4xl max-w-6xl mx-auto`}
      style={{
        backgroundImage: `linear-gradient(180deg, #171717, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  #171717), linear-gradient(90deg, #171717, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  #171717), url('${props.backdropImageUrl}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        opacity: `${props.opacity}`,
      }}
    >
      <div className="w-full h-full">
        <div className="relative">
          <Link to={`/movies/${props.id}`}>
            <div className="absolute top-48 lg:top-64 -right-5 lg:right-0 rotate-[270deg] opacity-80 hover:opacity-100">
              {props.title} ({props.releaseDate})
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
