import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import demo from "../../../assets/product/1.jpg";
import styles from "../../styles/Home.module.css";

export default function CategoriesCarousel() {
  return (
    <div className="px-2 mt-4">
      <div className="d-flex align-items-center justify-content-between ">
        <p className="fz16 fw-semibold ">Categories</p>
        <p className="fz12 fw-semibold color_orange ">SEE MORE</p>
      </div>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        className="mySwiper mt-2">
        <SwiperSlide className="d-flex  flex-column  gap-2">
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex flex-column gap-2">
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex flex-column gap-2">
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex flex-column gap-2">
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex flex-column gap-2">
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
          <div className="card  d-flex align-items-center justify-content-center py-3 rounded-1  shadow-sm ">
            <div className={`${styles.category_carousel_img_div}`}>
              <Image
                src={demo}
                alt="img"
                fill
              />
            </div>
            <p className="text-center">Webcams</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
