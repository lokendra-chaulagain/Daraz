import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import demo from "../../../assets/product/1.jpg";
import styles from "../../styles/Product.module.css";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function SingleProductCarousel() {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide className={`${styles.single_product_img_div}`}>
          <Image
            src={demo}
            alt="img"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.single_product_img_div}`}>
          <Image
            src={demo}
            alt="img"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.single_product_img_div}`}>
          <Image
            src={demo}
            alt="img"
            fill
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.single_product_img_div}`}>
          <Image
            src={demo}
            alt="img"
            fill
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
