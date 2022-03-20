import { useState, useEffect } from "react";

export default function MovieDescription(props) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isReadMore, setReadMore] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  return (
    <div className="my-6  md:px-0 md:my-0  text-white">
      <div className="bg-zinc-900 md:bg-transparent md:border-transparent p-1  rounded-md">
        <p className="text-gray-300 font-ibm md:text-lg">{props.overview}</p>
      </div>
    </div>
  );
}
