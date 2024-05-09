import { faX } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchListProps {}

function SearchList({}: SearchListProps) {
  const tempArray = [1, 2, 3, 4, 5].map(() => "기념일 꽃 추천");
  return (
    <div className="flex-col">
      {tempArray.map((item, idx) => (
        <div key={idx} className="mb-5 flex items-start justify-between">
          <div className="text-base">{item}</div>
          <button className="flex items-center text-gray-400">
            <FontAwesomeIcon icon={faX} className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchList;
