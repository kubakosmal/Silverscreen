import React, { useState, useContext, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import { ModalContext } from "./components/Context/Context.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App() {
  const modalContext = useContext(ModalContext);
  const isModalOpen = modalContext.isModalOpen;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
}
