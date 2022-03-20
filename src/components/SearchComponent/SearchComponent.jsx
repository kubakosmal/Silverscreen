import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import SearchModal from "./SearchModal/SearchModal.jsx";

export default function SearchComponent() {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div className="">
      {isModalActive ? (
        <SearchModal
          isModalActive={isModalActive}
          closeModal={() => setIsModalActive(false)}
        />
      ) : (
        <SearchBar
          isModalActive={isModalActive}
          openModal={() => setIsModalActive(true)}
        />
      )}
    </div>
  );
}
