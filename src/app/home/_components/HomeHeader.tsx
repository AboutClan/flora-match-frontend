import { faBars, faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeHeader() {
  return (
    <div className="mb-2 w-full px-7 h-11 flex justify-between items-center text-3xl ">
      <div className="font-semibold text-main">logo</div>
      <div className="mt-1">
        <button className="mr-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
        </button>
        <button>
          <FontAwesomeIcon icon={faBars} size="sm" />
        </button>
      </div>
    </div>
  );
}
