import { useEffect, useState, useContext } from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import SearchModal from "./SearchModal/SearchModal.jsx";
import MobileSearchBar from "./MobileSearchBar/MobileSearchBar.jsx";

export default function SearchComponent(props) {
  const mobile = props.mobile;
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div className="">
      {isModalActive ? (
        <SearchModal
          isModalActive={isModalActive}
          closeModal={() => setIsModalActive(false)}
        />
      ) : mobile ? (
        <MobileSearchBar
          openModal={() => {
            setIsModalActive(true);
          }}
        />
      ) : (
        <SearchBar
          mobile={props.mobile}
          isModalActive={isModalActive}
          openModal={() => {
            setIsModalActive(true);
          }}
        />
      )}
    </div>
  );
}
