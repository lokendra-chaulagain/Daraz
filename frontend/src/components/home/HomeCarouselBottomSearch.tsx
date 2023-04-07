import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { ImLocation } from "react-icons/im";
import { MdOutlineClear, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function HomeCarouselBottomSearch({ openModal }: any) {
  return (
    <div className="px-3 ">
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#searchModal"
        aria-controls="searchModal"
        className="shadow_0 form-control py-1 border-0 d-flex align-items-center py-2 ">
        <CiLocationOn
          className="color_orange"
          size={18}
        />
        <p className="ms-2"> | </p>
        <input
          type="email"
          className="border-0 ps-3 outline_0 fz14 "
          placeholder="Set your delivery location"
        />
      </div>

      <div
        style={{ height: "40vh" }}
        className="offcanvas offcanvas-bottom  rounded-top-4 overflow-hidden"
        tab-index="-1"
        id="searchModal">
        <div className="offcanvas-body p-0 m-0 overflow-hidden ">
          <div className="map_div over">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.142367895714!2d85.30715908700091!3d27.685844849236144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1837725d4d59%3A0x9814faeae42622df!2sGem%20Plasticrafts%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1668755430995!5m2!1sen!2snp"
              style={{ width: "100vw", height: "40vh" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div
              data-bs-dismiss="offcanvas"
              className="position-absolute rounded-circle d-flex align-items-center justify-content-center shadow-lg"
              style={{ top: "10px", right: "15px", backgroundColor: "white", height: "30px", width: "30px" }}>
              <MdOutlineClear
                size={20}
                color="black"
              />
            </div>
          </div>

          <div className="position-absolute bottom-0 w-100">
            <div
              onClick={openModal}
              data-bs-dismiss="offcanvas"
              className="border_top bg_white  d-flex align-items-center justify-content-between px-2  py-3">
              <div className="d-flex align-items-center gap-2 ">
                <ImLocation
                  size={22}
                  className="color_orange"
                />
                <p className="fz15 fw-semibold ">Change location</p>
              </div>
              <MdOutlineKeyboardArrowRight
                size={22}
                className="color_orange"
              />
            </div>

            <div className="bg_color_orange color_white d-flex align-items-center justify-content-center px-2  py-3">
              <p className="fz15 fw-semibold ">Confirm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
