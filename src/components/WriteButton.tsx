import { faPenToSquare } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WriteButton() {
  return (
    <div
      className="flex  items-center justify-center rounded-full bg-main text-white"
      style={{ height: "60px", width: "60px" }}
    >
      <FontAwesomeIcon icon={faPenToSquare} size="2x" />
    </div>
  );
}
