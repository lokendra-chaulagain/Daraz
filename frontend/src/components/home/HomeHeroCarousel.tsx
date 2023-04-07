import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { useGetAllBannerQuery } from "@/src/redux/api/globalApi";
import styles from "../../styles/home/HomeCarousel.module.css";
import HomeCarouselBottomSearch from "./HomeCarouselBottomSearch";

export default function HomeHeroCarousel({ openModal }: any) {
  const { data: banners } = useGetAllBannerQuery();

  return (
    <div className="position-relative mt-4">
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        {banners &&
          banners.map((banner: any, _id: any) => (
            <SwiperSlide
              key={_id}
              className={styles.carousel_image_div}>
              <Image
                //  src={`${process.env.CLOUDINARY_PRE_URL}/${banner.image}`}
                src={`${"https://res.cloudinary.com/dyof6o0ul/image/upload"}/${banner.image}`}
                fill
                alt="banner img"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={styles.search_field_wrapper}>
        <HomeCarouselBottomSearch openModal={openModal} />
      </div>
    </div>
  );
}
