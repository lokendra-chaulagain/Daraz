import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/2.jpg";
import banner3 from "../../../assets/banner/3.jpg";

export default function HomeHeroCarousel() {
  return (
    <div>
      <div className="swiper_wrapper">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper">
          <SwiperSlide style={{ position: "relative", width: "10vw", height: "20vh" }}>
            <Image
              src={banner1}
              fill
              alt="banner img"
            />
          </SwiperSlide>

          <SwiperSlide style={{ position: "relative", width: "10vw", height: "20vh" }}>
            <Image
              src={banner2}
              fill
              alt="banner img"
            />
          </SwiperSlide>

          <SwiperSlide style={{ position: "relative", width: "10vw", height: "20vh" }}>
            <Image
              src={banner3}
              fill
              alt="banner img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
