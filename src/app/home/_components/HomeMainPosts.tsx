import { faHeart } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function HomeMainPosts() {
  const imageTileArr = [
    {
      imageArr: [
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
      ],
      text: "테스트용 텍스트",
      url: "/review",
    },
    {
      imageArr: [
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.howebp",
      ],
      text: "테스트용 텍스트",
      url: "/review",
    },
  ];
  return (
    <div className="mx-7">
      <div className="mb-5">
        <div className="text-lg">
          현명한 선택! 합리적인 구매 <span className="text-main">'꽃히다'</span>
        </div>
        <div className="font-semibold text-xl">
          다양한 정보를 지금 바로 확인해보세요!
        </div>
      </div>
      <div className="flex h-52 mb-4">
        <div className="mr-0.5 rounded-md overflow-hidden">
          <Image
            width={242}
            height={208}
            src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
            alt="image"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="relative flex-1 mb-0.5 rounded-md overflow-hidden">
            <Image
              fill={true}
              sizes="208px"
              src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
              alt="image"
            />
          </div>
          <div className="relative flex-1 rounded-md overflow-hidden">
            <Image
              fill={true}
              sizes="208px"
              src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
              alt="image"
              className="z-10 absolute"
            />
            <div className="text-white flex justify-center items-center absolute h-full z-10 left-0 w-full opacity-50 bg-gray-5"></div>
            <div className="font-semibold text-xl text-white flex justify-center items-center absolute h-full z-20 left-0 w-full ">
              +3
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="rounded-full overflow-hidden mr-1">
          <Image
            src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
            width={36}
            height={36}
            alt="profile"
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold">플라워라운지</div>
          <div className="text-gray-4 text-xs">4시간 전</div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <FontAwesomeIcon icon={faHeart} className="mr-1" />
            <span>18</span>
          </div>
          <div className="">
            <FontAwesomeIcon icon={faHeart} className="mr-1" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
