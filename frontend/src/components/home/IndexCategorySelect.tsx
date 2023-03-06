import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/ScrollProductSection.module.css";
import { AiOutlineHome, AiFillHome, AiOutlineFire, AiFillFire } from "react-icons/ai";
import { MdOutlineLocalOffer, MdLocalOffer, MdFaceRetouchingNatural } from "react-icons/md";
import { FaRegBuilding, FaBuilding } from "react-icons/fa";

export default function IndexCategorySelect({ indexCategorySelected, setIndexCategorySelected }: any) {
  return (
    <div className={`${styles.product_section} mt-3 `}>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        className="mySwiper py-2 ">
        <SwiperSlide
          onClick={() => setIndexCategorySelected("all")}
          className={indexCategorySelected === "all" ? "d-flex flex-column align-items-center color_orange " : "d-flex flex-column align-items-center"}>
          {indexCategorySelected === "all" ? <AiFillHome size={24} /> : <AiOutlineHome size={24} />}
          <p className="fz12 fw-semibold">All</p>
        </SwiperSlide>

        <SwiperSlide
          onClick={() => setIndexCategorySelected("deals")}
          className={indexCategorySelected === "deals" ? "d-flex flex-column align-items-center color_orange " : "d-flex flex-column align-items-center"}>
          {indexCategorySelected === "deals" ? <MdLocalOffer size={24} /> : <MdOutlineLocalOffer size={24} />}
          <p className="fz12 fw-semibold">Deals</p>
        </SwiperSlide>

        <SwiperSlide
          onClick={() => setIndexCategorySelected("picks")}
          className={indexCategorySelected === "picks" ? "d-flex flex-column align-items-center color_orange " : "d-flex flex-column align-items-center"}>
          {indexCategorySelected === "picks" ? <AiFillFire size={24} /> : <AiOutlineFire size={24} />}
          <p className="fz12 fw-semibold">Picks</p>
        </SwiperSlide>

        <SwiperSlide
          onClick={() => setIndexCategorySelected("mall")}
          className={indexCategorySelected === "mall" ? "d-flex flex-column align-items-center color_orange " : "d-flex flex-column align-items-center"}>
          {indexCategorySelected === "mall" ? <FaBuilding size={24} /> : <FaRegBuilding size={24} />}
          <p className="fz12 fw-semibold">Mall</p>
        </SwiperSlide>

        <SwiperSlide
          onClick={() => setIndexCategorySelected("beauty")}
          className={indexCategorySelected === "beauty" ? "d-flex flex-column align-items-center color_orange " : "d-flex flex-column align-items-center"}>
          <MdFaceRetouchingNatural size={24} />
          <p className="fz12 fw-semibold">Beauty</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
