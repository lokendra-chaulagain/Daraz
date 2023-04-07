import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { AiOutlineHome, AiFillHome, AiOutlineFire, AiFillFire } from "react-icons/ai";
import { MdOutlineLocalOffer, MdLocalOffer, MdFaceRetouchingNatural } from "react-icons/md";
import { FaRegBuilding, FaBuilding } from "react-icons/fa";

export default function IndexCategorySelect({ indexCategorySelected, setIndexCategorySelected }: any) {
  return (
    <div className="bg_blue_grey mt-4 mb-3 container-fluid">
      <div className="d-flex align-items-center justify-content-between  py-3">
        <div
          onClick={() => setIndexCategorySelected("all")}
          className={indexCategorySelected === "all" ? "d-flex flex-column align-items-center color_orange cp " : "d-flex flex-column align-items-center cp"}>
          {indexCategorySelected === "all" ? <AiFillHome size={24} /> : <AiOutlineHome size={24} />}
          <p className="fz12 fw-semibold cp">All</p>
        </div>

        <div
          onClick={() => setIndexCategorySelected("deals")}
          className={indexCategorySelected === "deals" ? "d-flex flex-column align-items-center color_orange cp " : "d-flex flex-column align-items-center cp"}>
          {indexCategorySelected === "deals" ? <MdLocalOffer size={24} /> : <MdOutlineLocalOffer size={24} />}
          <p className="fz12 fw-semibold cp">Deals</p>
        </div>

        <div
          onClick={() => setIndexCategorySelected("picks")}
          className={indexCategorySelected === "picks" ? "d-flex flex-column align-items-center color_orange cp " : "d-flex flex-column align-items-center cp"}>
          {indexCategorySelected === "picks" ? <AiFillFire size={24} /> : <AiOutlineFire size={24} />}
          <p className="fz12 fw-semibold cp">Picks</p>
        </div>

        <div
          onClick={() => setIndexCategorySelected("mall")}
          className={indexCategorySelected === "mall" ? "d-flex flex-column align-items-center color_orange " : "d-flex flex-column align-items-center cp"}>
          {indexCategorySelected === "mall" ? <FaBuilding size={24} /> : <FaRegBuilding size={24} />}
          <p className="fz12 fw-semibold cp">Mall</p>
        </div>

        <div
          onClick={() => setIndexCategorySelected("beauty")}
          className={indexCategorySelected === "beauty" ? "d-flex flex-column align-items-center color_orange " : "d-flex flex-column align-items-center"}>
          <MdFaceRetouchingNatural size={24} />
          <p className="fz12 fw-semibold cp">Beauty</p>
        </div>
      </div>
    </div>
  );
}
