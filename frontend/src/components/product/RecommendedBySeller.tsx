import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import demo from "../../../assets/product/1.jpg";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

export default function RecommendedBySeller() {
  return (
    <div>
      <p>Recommended by Seller</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={10}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className={`${styles.recommended_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <p className={`${styles.recommended_carousel_price}`}>Rs 139,00</p>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.recommended_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <p className={`${styles.recommended_carousel_price}`}>Rs 139,00</p>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.recommended_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <p className={`${styles.recommended_carousel_price}`}>Rs 139,00</p>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.recommended_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <p className={`${styles.recommended_carousel_price}`}>Rs 139,00</p>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.recommended_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <p className={`${styles.recommended_carousel_price}`}>Rs 139,00</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
