import { faPenToSquare } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WriteButton() {
  return (
    <div className="rounded-full h-16 w-16 bg-main flex justify-center items-center text-white">
      <FontAwesomeIcon icon={faPenToSquare} size="2x" />
    </div>
  );
}
