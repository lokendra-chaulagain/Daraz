import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import logo from "../../../assets/1/logo-icon.png";

export default function ProductPromotion() {
  return (
    <div className="bg_color_white mt-3 mx-2 bg_color_white px-2 rounded-2 py-3">
      <div className="d-flex align-items-center  justify-content-between ">
        <p className="fz14 fw-semibold text-muted">Product Promotion</p>
        <MdOutlineKeyboardArrowRight size={20} />
      </div>

      <Swiper
        slidesPerView={1.4}
        spaceBetween={7}
        pagination={{
          clickable: true,
        }}
        className="mySwiper mt-2">
        <SwiperSlide>
          <div
            className="d-flex  align-items-center justify-content-between voucher_bg_color p-2 rounded-2"
            style={{ border: "1px dotted orange", height: "9vh" }}>
            <div className="d-flex flex-column align-items-center  justify-content-center">
              <div
                className="position-relative rounded-circle overflow-hidden"
                style={{ height: "3vh", width: "3vh", border: "1px solid orange" }}>
                <Image
                  src={logo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10  fw-semibold">
                For your <br /> First order
              </p>
            </div>
            <div className="">
              <p className="fz14 fw-semibold color_orange">Rs. 200</p>
              <p className="fz10">
                Min. Spend Rs 2,000 <br /> Valid for 7 days{" "}
              </p>
            </div>
            <div>
              <button className="btn rounded-1  py-0 px-1 bg_color_orange color_white fz11">Collect</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex  align-items-center justify-content-between voucher_bg_color p-2 rounded-2"
            style={{ border: "1px dotted orange", height: "9vh" }}>
            <div className="d-flex flex-column align-items-center  justify-content-center">
              <div
                className="position-relative rounded-circle overflow-hidden "
                style={{ height: "3vh", width: "3vh", border: "1px solid orange" }}>
                <Image
                  src={logo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10  fw-semibold">Daraz Voucher</p>
            </div>
            <div className="">
              <p className="fz14 fw-semibold color_orange">Rs. 200 Off</p>
              <p className="fz10">Min. Spend Rs 2,000</p>
              <p className="fz10">Mar 6 - Mar 12 2023</p>
            </div>
            <div>
              <button className="btn rounded-1  py-0 px-1 bg_color_orange color_white fz11">Collect</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex  align-items-center justify-content-between voucher_bg_color p-2 rounded-2"
            style={{ border: "1px dotted orange", height: "9vh" }}>
            <div className="d-flex flex-column align-items-center  justify-content-center">
              <div
                className="position-relative rounded-circle overflow-hidden "
                style={{ height: "3vh", width: "3vh", border: "1px solid orange" }}>
                <Image
                  src={logo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10  fw-semibold">Daraz Voucher</p>
            </div>
            <div className="">
              <p className="fz14 fw-semibold color_orange">Rs. 200 Off</p>
              <p className="fz10">Min. Spend Rs 2,000</p>
              <p className="fz10">Mar 6 - Mar 12 2023</p>
            </div>
            <div>
              <button className="btn rounded-1  py-0 px-1 bg_color_orange color_white fz11">Collect</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className="fz12">More</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
