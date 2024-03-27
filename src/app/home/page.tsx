import HomeBanner from "./_components/HomeBanner";
import HomeHeader from "./_components/HomeHeader";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <HomeHeader />
      <HomeBanner />
    </div>
  );
}
