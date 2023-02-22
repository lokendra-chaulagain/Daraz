import CategoriesCarousel from "../components/home/CategoriesCarousel";
import DiamondRow from "../components/home/DiamondRow";
import FlashSale from "../components/home/FlashSale";
import HomeCarouselBottomSearch from "../components/home/HomeCarouselBottomSearch";
import HomeHeroCarousel from "../components/home/HomeHeroCarousel";

export default function Home() {
  return (
    <>
      <main>
        <HomeHeroCarousel />
        <HomeCarouselBottomSearch/>
        <DiamondRow/>
        <CategoriesCarousel/>
        <FlashSale/>
      </main>
    </>
  );
}
