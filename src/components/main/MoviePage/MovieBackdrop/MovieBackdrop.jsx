import { useEffect, useState } from "react/cjs/react.development";

export default function MovieBackdrop(props) {
  const size = props.context === "main" ? "h-[28rem]" : "h-[18rem]";
  const [windowWidth, setWindowWidth] = useState(
    Math.round(window.innerWidth / 2)
  );
  const [windowHeight, setWindowHeight] = useState(
    Math.round(window.innerHeight / 2)
  );

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    console.log(window.innerHeight);
  }, [window.innerWidth, window.innerHeight]);
  return (
    <div
      id="moviePageBackgroundImage"
      className={`${size} sm:h-[34rem] md:h-[${windowHeight}px] rounded-4xl max-w-7xl mx-auto`}
      style={{
        backgroundImage: `linear-gradient(180deg, #171717, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  #171717), linear-gradient(90deg, #171717, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  #171717), url('${props.backdropImageUrl}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        opacity: `${props.opacity}`,
      }}
    ></div>
  );
}
