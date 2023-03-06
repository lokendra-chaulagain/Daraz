import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import demo from "../../../assets/product/1.jpg";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

export default function RecommendedBySeller() {
  return (
    <div className="pb-3">
      <p className="fz15 fw-semibold text-muted">Recommended by Seller</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={7}
        modules={[Pagination]}
        className="mySwiper mt-2">
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
