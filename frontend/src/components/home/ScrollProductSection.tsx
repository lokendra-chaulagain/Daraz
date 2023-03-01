import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import demo from "../../../assets/diamond/fashion.png";
import product from "../../../assets/product/1.jpg";
import styles from "../../styles/ScrollProductSection.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ScrollProductSection() {
  const datas = [{ name: "All" }, { name: "Mall" }, { name: "Fashion" }, { name: "Beauty" }, { name: "Electronic" }, { name: "Mobiles" }, { name: "Televisions" }, { name: "All" }, { name: "All" }, { name: "All" }];

  return (
    <div className={`${styles.product_section} py-2 px-2`}>
      <div>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={10}
          className="mySwiper">
          {datas &&
            datas.map((data, index) => (
              <SwiperSlide
                key={index}
                className="d-flex flex-column  align-items-center">
                <div
                  className="position-relative "
                  style={{ height: "30px", width: "30px" }}>
                  <Image
                    src={demo}
                    fill
                    alt="img"
                  />
                </div>
                <p className={styles.icon_text}>All</p>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="d-flex m-0 gap-1  flex-wrap">
          {datas &&
            datas.map((data, index) => (
              <div
                key={index}
                className="rounded-top-2 pb-2"
                style={{ width: "49%", backgroundColor: "white" }}>
                <div
                  className="position-relative rounded-2 overflow-hidden"
                  style={{ height: "160px", width: "100%" }}>
                  <Image
                    src={product}
                    fill
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-1 px-2">
                  <p className={`${styles.product_name} mt-2`}>Lorem ipsum dolor sit amet consectetur.</p>
                  <div>
                    <AiFillStar
                      size={15}
                      color="orange"
                    />
                    <span className="fz11">4.9/5 (11) . 57 Sold</span>
                  </div>
                  <div className={styles.voucher}>Rs.200 Off</div>
                  <p className="color_orange">
                    <span className="fz11 fw-bolder">Rs.</span>
                    <span className="fz16 fw-bold">800</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
