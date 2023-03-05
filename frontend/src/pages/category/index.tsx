import BabiesAndToys from "@/src/components/category/BabiesAndToys";
import CategoryNav from "@/src/components/category/CategoryNav";
import ElectronicAccessories from "@/src/components/category/ElectronicAccessories";
import ElectronicDevice from "@/src/components/category/ElectronicDevice";
import GroceriesAndPets from "@/src/components/category/GroceriesAndPets";
import HealthAndBeauty from "@/src/components/category/HealthAndBeauty";
import HomeAndLifestyle from "@/src/components/category/HomeAndLifestyle";
import MenFashion from "@/src/components/category/MenFashion";
import MotorsToolsAndDiy from "@/src/components/category/MotorsToolsAndDiy";
import SportsAndOutdoor from "@/src/components/category/SportsAndOutdoor";
import TvAndHomeAppliance from "@/src/components/category/TvAndHomeAppliance";
import WatchBagJewellery from "@/src/components/category/WatchBagJewellery";
import WomenFashion from "@/src/components/category/WomenFashion";
import Image from "next/image";
import React from "react";
import { RiUserStarLine } from "react-icons/ri";
import demo from "../../../assets/product/1.jpg";

export default function Category() {
  const categories = [
    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },
    {
      name: "Webcams",
    },
    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },
  ];

  return (
    <div
      className="position-relative overflow-hidden"
      style={{ height: "100vh" }}>
      <div
        className="position-fixed w-100 top-0 z-3"
        style={{ backgroundColor: "white", height: "5vh" }}>
        <CategoryNav />
      </div>

      <div className="row mt-5  ">
        <div
          className="col-3 overflow-y-scroll overflow-x-hidden py-3 bg_blue_grey"
          style={{ height: "95vh" }}>
          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Just for you</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Women Fashion</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Men Fashion</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">
              Watches,Bags, <br /> Jewellery
            </p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Electronic Devices</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">TV & Home Appliances</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Electronic Accessories</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Groceries & Pets</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Babies & Toys</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Home & Lifestyle</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Sports & Outdoor</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Just for you</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Motors,Tools & DIY</p>
          </div>
        </div>

        <div className="col-9 overflow-scroll overflow-y-scroll" style={{height:"95vh"}}>
          {/* <div className="row d-flex ">
            {categories &&
              categories.map((category, index) => (
                <div
                  key={index}
                  className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-3">
                  <div
                    className="image_div position-relative"
                    style={{ height: "7vh", width: "7vh" }}>
                    <Image
                      src={demo}
                      fill
                      alt=""
                    />
                  </div>
                  <p className="fz10 fw-semibold ">Name</p>
                </div>
              ))}
          </div> */}

          <div>
            <WomenFashion />
            <HealthAndBeauty />
            <MenFashion />
            <WatchBagJewellery />
            <ElectronicDevice />
            <TvAndHomeAppliance />
            <ElectronicAccessories />
            <GroceriesAndPets />
            <BabiesAndToys />
            <HomeAndLifestyle />
            <SportsAndOutdoor />
            <MotorsToolsAndDiy />
          </div>
        </div>
      </div>
    </div>
  );
}
