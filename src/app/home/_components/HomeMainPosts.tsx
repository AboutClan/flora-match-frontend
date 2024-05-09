import { faHeart } from "@fortawesome/pro-regular-svg-icons";
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

  console.log(imageTileArr);
  return (
    <div className="mx-7">
      <div className="mb-5">
        <div className="text-base">
          현명한 선택! 합리적인 구매 &apos;<span className="text-main">꽃히다</span>&apos;
        </div>
        <div className="text-xl font-semibold">
          <span className="text-main">다양한 정보</span>를 지금 바로{" "}
          <span className="text-main">확인</span>해보세요!
        </div>
      </div>
      <div className="mb-3.5 flex h-52">
        <div className="mr-1 overflow-hidden rounded-md">
          <Image
            width={242}
            height={208}
            src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
            alt="image"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="relative mb-1 flex-1 overflow-hidden rounded-md">
            <Image
              fill={true}
              sizes="208px"
              src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
              alt="image"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-md">
            <Image
              fill={true}
              sizes="208px"
              src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
              alt="image"
              className="absolute z-10"
            />
            <div className="absolute left-0 z-10 flex h-full w-full items-center justify-center bg-gray-5 text-white opacity-50"></div>
            <div className="absolute left-0 z-20 flex h-full w-full items-center justify-center text-xl font-semibold text-white ">
              +3
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="mr-1 overflow-hidden rounded-full">
          <Image
            src="https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp"
            width={36}
            height={36}
            alt="profile"
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold">플라워라운지</div>
          <div className="text-xs text-gray-4">4시간 전</div>
        </div>
        <div className="flex font-semibold text-gray-4">
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
