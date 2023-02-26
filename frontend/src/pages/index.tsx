import CategoriesCarousel from "../components/home/CategoriesCarousel";
import DiamondRow from "../components/home/DiamondRow";
import FlashSale from "../components/home/FlashSale";
import HomeCarouselBottomSearch from "../components/home/HomeCarouselBottomSearch";
import HomeHeader from "../components/home/HomeHeader";
import HomeHeroCarousel from "../components/home/HomeHeroCarousel";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <div className="position-relative">
        <HomeHeroCarousel />
        <div
          className="position-absolute  z-1 w-100"
          style={{ bottom: "-20%" }}>
          <HomeCarouselBottomSearch />
        </div>
      </div>

      <DiamondRow />
      <CategoriesCarousel />
      <FlashSale />
    </div>
  );
}
