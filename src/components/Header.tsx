import { faGlass } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header style={{ fontSize: "12px" }}>
      <FontAwesomeIcon icon={faGlass} size="xs" style={{ fontSize: "24px" }} />
      <div className="logo">logo</div>
    </header>
  );
}
