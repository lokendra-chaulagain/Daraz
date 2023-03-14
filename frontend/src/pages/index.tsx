import { useState } from "react";
import Footer from "../components/Footer";
import CategoriesCarousel from "../components/home/CategoriesCarousel";
import DiamondRow from "../components/home/DiamondRow";
import FlashSale from "../components/home/FlashSale";
import HomeCarouselBottomSearch from "../components/home/HomeCarouselBottomSearch";
import HomeHeader from "../components/home/HomeHeader";
import HomeHeroCarousel from "../components/home/HomeHeroCarousel";
import HappyHour from "../components/home/HappyHour";
import SaveOnDaraz from "../components/home/SaveOnDaraz";
import GlobalSingleProduct from "../components/GlobalSingleProduct";
import IndexCategorySelect from "../components/home/IndexCategorySelect";
import LocationMapModal from "../components/home/LocationMapModal";
import ChangeLocationModal from "../components/home/ChangeLocationModal";

export default function Home() {
  const datas = [{ name: "All" }, { name: "Mall" }, { name: "Fashion" }, { name: "Beauty" }, { name: "Electronic" }, { name: "Mobiles" }, { name: "Televisions" }, { name: "All" }, { name: "All" }, { name: "All" }];
  const [openSmallModal, setOpenSmallModal] = useState(false);
  const [openBigModal, setOpenBigModal] = useState(false);
  const [indexCategorySelected, setIndexCategorySelected] = useState("all");

  const openSmall = () => {
    setOpenSmallModal(true);
  };

  const openBig = () => {
    setOpenBigModal(true);
    setOpenSmallModal(false);
  };
  const closeBig = () => {
    setOpenBigModal(false);
  };

  return (
    <div
      className="d-flex flex-column  justify-content-between overflow-y-hidden"
      style={{ height: "100vh" }}>
      <HomeHeader />

      <div className="overflow-scroll">
        <div className="position-relative">
          <HomeHeroCarousel />
          <div
            onClick={openSmall}
            className="position-absolute  z-1 w-100"
            style={{ bottom: "-20%" }}>
            <HomeCarouselBottomSearch />
          </div>
        </div>

        <DiamondRow />
        <HappyHour />
        <CategoriesCarousel
          left={"Categories"}
          right={"SEE MORE"}
        />

        <FlashSale />

        <CategoriesCarousel
          left={"Trending Now"}
          right={""}
        />

        <SaveOnDaraz />

        <IndexCategorySelect
          setIndexCategorySelected={setIndexCategorySelected}
          indexCategorySelected={indexCategorySelected}
        />
        <GlobalSingleProduct datas={datas} />
      </div>
      <Footer />

      {openSmallModal && (
        <LocationMapModal
          setOpenSmallModal={setOpenSmallModal}
          openSmall={openSmall}
          openBig={openBig}
        />
      )}

      {openBigModal && (
        <ChangeLocationModal
          setOpenBigModal={setOpenBigModal}
          closeBig={closeBig}
        />
      )}
    </div>
  );
}
