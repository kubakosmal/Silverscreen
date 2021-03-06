import { useState, useEffect } from "react";

export default function ProductionDescription(props) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isReadMore, setReadMore] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  return (
    <div className="lg:px-0 lg:my-0 text-white">
      <div className="lg:border-transparent  rounded-md">
        <p className="text-gray-100 font-ibm lg:text-lg">{props.overview}</p>
      </div>
    </div>
  );
}
