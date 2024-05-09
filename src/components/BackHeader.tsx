"use client";

import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function BackHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header
      className="flex w-full  items-center justify-between px-5 text-3xl "
      style={{ height: "86px", paddingTop: "28px", paddingBottom: "22px" }}
    >
      <button className="px-2" onClick={handleBack}>
        <FontAwesomeIcon icon={faChevronLeft} size="xs" style={{ fontSize: "24px" }} />
      </button>
    </header>
  );
}
