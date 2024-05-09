import WriteButton from "@/components/WriteButton";
import HomeBanner from "./_components/HomeBanner";
import HomeHeader from "./_components/HomeHeader";
import HomeMainPosts from "./_components/HomeMainPosts";
import HomeStoreSlider from "./_components/HomeStoreSlider";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col ">
        <HomeHeader />
        <HomeBanner />
        <div className="ml-7 mt-7">
          <HomeStoreSlider />
        </div>
        <HomeMainPosts />
      </div>
      <div className="fixed bottom-10 right-7 z-50">
        <WriteButton />
      </div>
    </>
  );
}
