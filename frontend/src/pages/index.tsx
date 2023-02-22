import DiamondRow from "../components/home/DiamondRow";
import HomeCarouselBottomSearch from "../components/home/HomeCarouselBottomSearch";
import HomeHeroCarousel from "../components/home/HomeHeroCarousel";

export default function Home() {
  return (
    <>
      <main>
        <HomeHeroCarousel />
        <HomeCarouselBottomSearch/>
        <DiamondRow/>
      </main>
    </>
  );
}
