import React, {  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import demo from "../../../assets/product/1.jpg";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCoupon3Fill, RiQuestionAnswerLine } from "react-icons/ri";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

export default function SingleProductCarousel() {
  const images = [
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
  ];

  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper ">
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="position-relative "
                style={{ height: "40vh", width: "100%" }}>
                <Image
                  src={demo}
                  alt="img"
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="bg_color_white rounded-2 mx-2 mt-3 px-2 py-3">
        <div className="">
          <p className="fz15">Improved Quality LARGE Storage Bags Organizers Portable Bamboo Charcoal Clothes Blanket . . .</p>
          <p className="fz16 fw-semibold mt-2">Rs. 30538</p>

          <div className="voucher_bg_color rounded-2 d-flex align-items-center justify-content-between  fz14 fw-semibold color_orange px-2 py-3 mt-3">
            <div className="d-flex  align-items-center gap-2 ">
              <RiCoupon3Fill size={20} />
              <p>Up to Rs. 1000 off</p>
            </div>

            <div className="d-flex align-items-center ">
              <p className="">6 Vouchers</p>
              <MdOutlineKeyboardArrowRight size={24} />
            </div>
          </div>
        </div>

        <div className=" fz14 d-flex align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center gap-1">
            <AiFillStar
              size={15}
              color="orange"
            />
            <p>5/5 (1)</p>
            <MdOutlineKeyboardArrowRight size={20} />
          </div>

          <div className="d-flex align-items-center gap-1">
            <AiOutlineHeart size={20} />
            <p>18</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center gap-2">
            <RiQuestionAnswerLine size={20} />
            <p className="fz15">Ask question about the product.</p>
          </div>

          <MdOutlineKeyboardArrowRight size={20} />
        </div>
      </div>
    </div>
  );
}
