"use client";

import Image from "next/image";
import Link from "next/link";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
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
    <div className="ml-7 mt-7 mb-11">
      <div className="mb-3  flex justify-between items-end pr-7">
        <div className="font-semibold text-main text-xl">
          꽃자님! 이런 꽃집은 어떠세요?
        </div>
        <button className="text-xs text-gray-3">모두보기</button>
      </div>
      <div className="">
        <Swiper slidesPerView={3.4} spaceBetween={10}>
          {imageTileArr.map((imageTile, index) => (
            <SwiperSlide key={index}>
              <Link href={imageTile.url} className="relative flex flex-col">
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{ height: "120px" }}
                >
                  <Image src={imageTile.imageUrl} fill={true} alt="eventImg" />
                </div>
                <div className="ml-2 mb-2.5 z-10 absolute left-0 bottom-0 text-white">
                  <div className="font-semibold ">플라워라운지</div>
                  <div className="text-xxs mt-0.5">
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
