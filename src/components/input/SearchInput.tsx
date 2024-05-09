import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center border-b-2 border-gray-6 text-xl">
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow p-1 outline-none"
      />
      <button className="p-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </button>
    </div>
  );
};

export default SearchBar;
