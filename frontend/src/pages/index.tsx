import { useState } from "react";
import Footer from "../components/Footer";
import CategoriesCarousel from "../components/home/CategoriesCarousel";
import DiamondRow from "../components/home/DiamondRow";
import FlashSale from "../components/home/FlashSale";
import HomeCarouselBottomSearch from "../components/home/HomeCarouselBottomSearch";
import HomeHeader from "../components/home/HomeHeader";
import HomeHeroCarousel from "../components/home/HomeHeroCarousel";
import ScrollProductSection from "../components/home/ScrollProductSection";
import { MdOutlineClear, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { Timeline } from "antd";
import { BsDot } from "react-icons/bs";
import HappyHour from "../components/home/HappyHour";

export default function Home() {
  const [locationBarClicked, setLocationBarClicked] = useState(false);
  const [clickedChangeLocation, setClickedChangeLocation] = useState(false);

  const openSmallModal = () => {
    setLocationBarClicked(true);
  };
  const closeSmallModal = () => {
    setLocationBarClicked(false);
  };

  const openBigModal = () => {
    setClickedChangeLocation(true);
    setLocationBarClicked(false);
  };
  const closeBigModal = () => {
    setClickedChangeLocation(false);
  };

  const handleLocationSetSuccess = () => {
    setClickedChangeLocation(false);
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
            onClick={openSmallModal}
            className="position-absolute  z-1 w-100"
            style={{ bottom: "-20%" }}>
            <HomeCarouselBottomSearch />
          </div>
        </div>

        <DiamondRow />
        <HappyHour />
        <CategoriesCarousel />
        <FlashSale />
        <ScrollProductSection />
      </div>
      <Footer />

      {locationBarClicked && (
        <div
          className="position-absolute bottom-0 z-3 shadow-lg"
          style={{ height: "", backgroundColor: "white" }}>
          <div className="map_div position-relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.142367895714!2d85.30715908700091!3d27.685844849236144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1837725d4d59%3A0x9814faeae42622df!2sGem%20Plasticrafts%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1668755430995!5m2!1sen!2snp"
              style={{ width: "100vw", height: "25vh", borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div
              onClick={closeSmallModal}
              className="position-absolute rounded-circle d-flex align-items-center justify-content-center shadow-lg"
              style={{ top: "10px", right: "15px", backgroundColor: "white", height: "30px", width: "30px" }}>
              <MdOutlineClear
                size={20}
                color="black"
              />
            </div>
          </div>

          <div
            onClick={openBigModal}
            className="border_top d-flex align-items-center justify-content-between px-2  py-3">
            <div className="d-flex align-items-center gap-2 ">
              <ImLocation
                size={22}
                className="color_orange"
              />
              <p className="fz15 fw-semibold ">Change location</p>
            </div>
            <MdOutlineKeyboardArrowRight
              size={22}
              className="color_orange"
            />
          </div>

          <div
            onClick={closeSmallModal}
            className="bg_color_orange color_white d-flex align-items-center justify-content-center px-2  py-3">
            <p className="fz15 fw-semibold ">Confirm</p>
          </div>
        </div>
      )}

      {clickedChangeLocation && (
        <div
          className="position-absolute bottom-0 z-3 shadow-lg"
          style={{ backgroundColor: "white" }}>
          <div style={{ backgroundColor: "#eef1f5e7", width: "100vw" }}>
            <div className="d-flex border_bottom  align-items-center justify-content-between py-3 px-2">
              <p
                onClick={closeBigModal}
                className="fz14">
                Close
              </p>
              <p className="fz16 fw-semibold">Select your Area</p>
              <p></p>
            </div>

            <div className="bg_color_white d-flex  align-items-center justify-content-between rounded-3 overflow-hidden mx-3 mt-3 py-2 ps-1 pe-3 shadow_0">
              <div className="d-flex align-items-center ">
                <BsDot
                  size={30}
                  className="color_orange"
                />
                <p className="fz14 fw-semibold">Region</p>
              </div>

              <p className="fz14 text-muted ">Selection below...</p>
            </div>

            <div className="bg_color_white rounded-3 overflow-hidden mx-3 mt-3 shadow_0">
              <Timeline
                className="pt-5 px-3 fw-semibold"
                items={[
                  {
                    children: "Region Gandaki Provience",
                  },
                  {
                    children: "City Gaindakot",
                  },
                  {
                    children: "Area Kali Gandagi",
                  },
                ]}
              />
            </div>

            <p className="fz15 px-4 my-3">Select the Region</p>
            <div
              className="bg_color_white rounded-3 overflow-hidden mx-3 mt-3 shadow_0 p-3 overflow-scroll"
              style={{ height: "30vh" }}>
              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>

              <div className="mb-3 ">
                <p className="fz14 fw-semibold">Bagmati Provience</p>
                <hr className="p-0 m-0 mt-2" />
              </div>
            </div>

            <div className="bg_color_white pp-2 shadow_0 border_top shadow-lg px-3 pb-3">
              <button
                onClick={handleLocationSetSuccess}
                type="submit"
                className="btn rounded-1 bg_color_orange color_white w-100 mt-2">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
