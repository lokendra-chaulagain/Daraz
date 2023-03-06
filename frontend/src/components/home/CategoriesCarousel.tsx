import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import demo from "../../../assets/product/1.jpg";
import styles from "../../styles/Home.module.css";

export default function CategoriesCarousel({ left, right }: any) {
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
    <div className="px-2 mt-4">
      <div className="d-flex align-items-center justify-content-between ">
        <p className="fz15 fw-semibold  ">{left}</p>
        <p className="fz12 fw-semibold color_orange ">{right}</p>
      </div>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        className="mySwiper mt-2">
        {categories &&
          categories.map((category: any, index: any) => (
            <SwiperSlide
              key={index}
              className="d-flex  flex-column  gap-2">
              <div
                className="card shadow-none  d-flex align-items-center justify-content-center py-3 rounded-1   "
                style={{ border: "1px solid #cad2ddb9 " }}>
                <div className={`${styles.category_carousel_img_div}`}>
                  <Image
                    src={demo}
                    alt="img"
                    fill
                  />
                </div>
                {category && <p className="text-center fz12">{category.name}</p>}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        className="mySwiper mt-2">
        {categories &&
          categories.map((category: any, index: any) => (
            <SwiperSlide
              key={index}
              className="d-flex  flex-column  gap-2">
              <div
                className="card shadow-none d-flex align-items-center justify-content-center py-3 rounded-1   "
                style={{ border: "1px solid #cad2ddb9" }}>
                <div className={`${styles.category_carousel_img_div}`}>
                  <Image
                    src={demo}
                    alt="img"
                    fill
                  />
                </div>
                {category && <p className="text-center fz12">{category.name}</p>}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
