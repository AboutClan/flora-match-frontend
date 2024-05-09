import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MainBannerFlowerSvg from "../../../../asset/svg/MainBannerFlowerSvg";

export default function HomeBanner() {
  return (
    <div className="flex items-center justify-between bg-main px-7" style={{ height: "144px" }}>
      <div className="flex flex-col items-start">
        <div className="mb-2 text-xl text-white">
          당신만의 <b>꽃 취향</b>을
          <br /> 찾아드립니다!
        </div>
        <button className="rounded-2xl bg-white px-2.5 py-1 text-xs text-main">
          <span className="mr-1 ">꽃 mbti 검사</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <MainBannerFlowerSvg />
    </div>
  );
}
