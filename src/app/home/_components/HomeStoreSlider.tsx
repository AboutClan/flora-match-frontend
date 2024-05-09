"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import Link from "next/link";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

export interface IImageTile {
  imageUrl: string;
  text: string;
  url: string;
}

export default function HomeStoreSlider() {
  const imageTileArr: IImageTile[] = [
    {
      imageUrl:
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
      text: "테스트용 텍스트",
      url: "/review",
    },
    {
      imageUrl:
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
      text: "테스트용 텍스트",
      url: "/review",
    },
    {
      imageUrl:
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
      text: "테스트용 텍스트",
      url: "/review",
    },
    {
      imageUrl:
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
      text: "테스트용 텍스트",
      url: "/review",
    },
    {
      imageUrl:
        "https://studyabout.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%8E%98+%EB%A9%94%EC%9D%B8+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%88%98%EC%9B%90/%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8.webp",
      text: "테스트용 텍스트",
      url: "/review",
    },
  ];

  return (
    <div className="mb-11 ">
      <div className="mb-3  flex items-end justify-between pr-7">
        <div className="text-xl  font-semibold">
          꽃자님! 이런 <span className="text-main">꽃집</span>은 어떠세요?
        </div>
        <button className="mb-1 text-xs text-gray-3">모두보기</button>
      </div>
      <div className="">
        <Swiper slidesPerView={3.35} spaceBetween={10}>
          {imageTileArr.map((imageTile, index) => (
            <SwiperSlide key={index}>
              <Link href={imageTile.url} className="relative flex flex-col">
                <div
                  className="relative overflow-hidden rounded-lg"
                  style={{ height: "120px", width: "100px" }}
                >
                  <Image src={imageTile.imageUrl} fill={true} alt="eventImg" />
                </div>
                <div className="absolute bottom-0 left-0 z-10 mb-2.5 ml-2 text-white">
                  <div className="font-semibold ">플라워라운지</div>
                  <div className="mt-0.5 text-xxs">
                    <div className="font-semibold">동작구 대표 꽃집!</div>
                    <div>서울시 동작구</div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
