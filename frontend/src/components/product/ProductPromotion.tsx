import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineKeyboardArrowRight, MdRedeem } from "react-icons/md";
import Image from "next/image";
import logo from "../../../assets/1/logo-icon.png";
import { SiRubygems } from "react-icons/si";

export default function ProductPromotion() {
  return (
    <div className="bg_white mt-3 mx-2 bg_white px-2 rounded-2 py-3">
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
          <p className="fz12 mt-4  fw-semibold color_orange">More</p>
        </SwiperSlide>
      </Swiper>
      <hr className="my-0 mt-3 mb-2" />

      <div className="">
        <p className="fz14 fw-semibold text-muted">Gem Promotion</p>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <div className="d-flex align-items-center gap-2">
            <SiRubygems
              color="#A020F0"
              size={20}
            />
            <p className="fz14">
              Earn up to <strong>915</strong> gems on this item
            </p>
          </div>
          <MdOutlineKeyboardArrowRight size={22} />
        </div>
        <hr />
      </div>

      <div className="d-flex align-items-center justify-content-between mt-2">
        <div className="d-flex align-items-center gap-2">
          <MdRedeem
            className="color_orange"
            size={22}
          />
          <p className="fz14">Redeems gems on checkout to get discount</p>
        </div>
        <MdOutlineKeyboardArrowRight size={22} />
      </div>
    </div>
  );
}
