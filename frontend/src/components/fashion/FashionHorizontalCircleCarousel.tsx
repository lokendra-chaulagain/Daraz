import Image from "next/image";
import React from "react";
import joggers from "../../../assets/fashion/joggers.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function FashionHorizontalCircleCarousel() {
  const datas = [{ name: "All" }, { name: "Mall" }, { name: "Fashion" }, { name: "Beauty" }, { name: "Electronic" }, { name: "Mobiles" }, { name: "Televisions" }, { name: "All" }, { name: "All" }, { name: "All" }];

  return (
    <Swiper
      slidesPerView={5.5}
      spaceBetween={10}
      className="mySwiper mt-1 pb-2">
      {datas &&
        datas.map((data, index) => (
          <SwiperSlide
            key={index}
            className="d-flex flex-column  align-items-center">
            <div
              className="position-relative "
              style={{ height: "35px", width: "35px" }}>
              <Image
                src={joggers}
                fill
                alt="img"
              />
            </div>
            <p className="fz11 color_purple text-center fw-medium">Beauty</p>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
