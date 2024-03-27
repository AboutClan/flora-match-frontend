import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBannerFlowerSvg from "../../../../asset/svg/MainBannerFlowerSvg";

export default function HomeBanner() {
  return (
    <div
      className="bg-main px-7 flex items-center justify-between"
      style={{ height: "144px" }}
    >
      <div className="flex flex-col items-start">
        <div className="text-white text-lg mb-2">
          당신만의 <b>꽃 취향</b>을
          <br /> 찾아드립니다!
        </div>
        <button className="py-1 px-2.5 text-xs text-main bg-white rounded-2xl">
          <span className="mr-1 ">꽃 mbti 검사</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <MainBannerFlowerSvg />
    </div>
  );
}
