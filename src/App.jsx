import React, { useState, useContext } from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { Swiper, SwiperSlide } from "swiper/react";

import { ModalContext } from "./components/Context/Context.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const App = () => {
  const modalContext = useContext(ModalContext);
  const isModalOpen = modalContext.isModalOpen;
  console.log("IS MODAL OPEN?");
  console.log(modalContext.isModalOpen);

  const [isUserLogged, setIsUserLogged] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [requestToken, setRequestToken] = useState("");

  return (
    <div
      className={`max-w-full md: lg:mx-auto relative font-lato ${
        isModalOpen ? "hidden" : false
      }`}
    >
      <Header></Header>
      <div className="lg:mx-auto mx-4">
        <Main></Main>
      </div>
    </div>
  );
};

export default App;
