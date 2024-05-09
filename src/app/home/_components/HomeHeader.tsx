"use client";

import Drawer from "@/components/Drawer";
import { faBars, faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function HomeHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);

  const [isDrawer, setIsDrawer] = useState(false);
  const hasDrawerOpenParams = newSearchParams.get("search") === "open";

  const handleDrawerOpen = () => {
    newSearchParams.set("search", "open");
    router.push(`/home?${newSearchParams.toString()}`);
    setIsDrawer(true);
  };

  return (
    <>
      <header
        className="flex w-full  items-center justify-between px-7 text-3xl "
        style={{ height: "86px", paddingTop: "28px", paddingBottom: "22px" }}
      >
        <div className="text-3xl font-semibold text-main">logo</div>
        <div>
          <button className="mr-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-7 w-7" />
          </button>
          <button onClick={handleDrawerOpen}>
            <FontAwesomeIcon icon={faBars} className="h-7 w-7" />
          </button>
        </div>
      </header>
      {(hasDrawerOpenParams || isDrawer) && <Drawer setIsModal={setIsDrawer} />}
    </>
  );
}

export default HomeHeader;
