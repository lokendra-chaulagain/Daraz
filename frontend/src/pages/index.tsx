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

  const [openedChangeLocationModal, setOpenedChangeLocationModal] = useState(false);
  const openModal = () => {
    setOpenedChangeLocationModal(true);
  };

  return (
    <div className="d-flex flex-column ">
      <HomeHeader />
      <HomeHeroCarousel openModal={openModal} />
      <DiamondRow />
      <CategoriesCarousel
        left={"Categories"}
        right={"SEE MORE"}
      />

      <FlashSale />
      <HappyHour />

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

      {openedChangeLocationModal && <ChangeLocationModal />} 
    </div>
  );
}
