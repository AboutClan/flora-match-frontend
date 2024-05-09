"use client";

import HomeStoreSlider from "@/app/home/_components/HomeStoreSlider";
import { ModalProps } from "@/types/commonTypes";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import BackHeader from "./BackHeader";
import ButtonGroup from "./ButtonGroup";
import SearchBar from "./input/SearchInput";
import SearchList from "./SearchList";

const Drawer = ({ setIsModal }: ModalProps) => {
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);

  useEffect(() => {
    if (newSearchParams.get("search") === "open") {
      setIsModal(false);
    }
  }, [newSearchParams]);

  return (
    <div className="animate-slideInFromRight fixed z-20 mb-10 h-screen w-screen bg-white">
      <BackHeader />
      <div className="px-7">
        <div className="mb-10 text-2xl font-semibold">
          어떤 <span className="text-main">꽃</span>을 찾으시나요?{" "}
        </div>
        <SearchBar />
        <div className="my-10">
          <div className="mb-4 text-base font-semibold">테마</div>
          <ButtonGroup />
        </div>
        <div className="mb-9">
          <div className="mb-5 text-lg font-semibold">최근 검색어</div>
          <SearchList />
        </div>
        <HomeStoreSlider />
      </div>
    </div>
  );
};

export default Drawer;
