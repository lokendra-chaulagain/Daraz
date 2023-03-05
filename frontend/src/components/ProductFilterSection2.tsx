import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import { RiArrowUpSFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";

export default function ProductFilterSection2() {
  return (
    <div
      className="mt-3 position-relative "
      style={{ height: "35vh" }}>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper ">
        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center py-1 fw-semibold rounded-pill px-2"
            style={{ backgroundColor: "#eef1f5e7", color: "grey" }}>
            <p className="fz11">Brand</p>
            <RiArrowUpSFill size={20} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center py-1 fw-semibold rounded-pill px-2"
            style={{ backgroundColor: "#eef1f5e7", color: "grey" }}>
            <p className="fz11">Brand</p>
            <RiArrowUpSFill size={20} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center py-1 fw-semibold rounded-pill px-2"
            style={{ backgroundColor: "#eef1f5e7", color: "grey" }}>
            <p className="fz11">Brand</p>
            <RiArrowUpSFill size={20} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center py-1 fw-semibold rounded-pill px-2"
            style={{ backgroundColor: "#eef1f5e7", color: "grey" }}>
            <p className="fz11">Brand</p>
            <RiArrowUpSFill size={20} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center py-1 fw-semibold rounded-pill px-2"
            style={{ backgroundColor: "#eef1f5e7", color: "grey" }}>
            <p className="fz11">Brand</p>
            <RiArrowUpSFill size={20} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center py-1 fw-semibold rounded-pill px-2"
            style={{ backgroundColor: "#eef1f5e7", color: "grey" }}>
            <p className="fz11">Brand</p>
            <RiArrowUpSFill size={20} />
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className="position-absolute d-flex flex-column justify-content-between shadow-lg shadow_0 w-100 p-3 rounded-bottom-4 mt-2 "
        style={{ backgroundColor: "white", height: "35vh" }}>
        <div
          className="row overflow-scroll"
          style={{ height: "35vh" }}>
          <div className="col d-flex flex-column gap-3">
            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>
          </div>

          <div className="col d-flex flex-column gap-3">
            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <p className="fz12 fw-semibold">KTM City</p>
              <BiCheck size={18} />
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 w-100 mt-2">
          <button
            type="submit"
            className="btn rounded-pill w-100 fw-semibold f"
            style={{ color: "grey", border: "1px solid grey" }}>
            Reset
          </button>

          <button
            type="submit"
            className="btn rounded-pill bg_color_orange w-100 color_white fw-semibold">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
