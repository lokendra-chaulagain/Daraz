import React from "react";
import { MdOutlineKeyboardArrowRight, MdRedeem } from "react-icons/md";
import { IoIosSquare } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";

export default function DeliveryModal() {
  return (
    <div className="mt-1 px-2 py-3 bg_color_white">
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottomDelivery"
        aria-controls="offcanvasBottomDelivery"
        className=" d-flex align-items-start gap-4 justify-content-between">
        <p className="fz14 fw-semibold text-muted">Delivery</p>

        <div className="d-flex flex-column align-items-start">
          <div
            className="d-flex align-items-center w-75 justify-content-center gap-1 rounded-1 px-1"
            style={{ border: "1px solid orange" }}>
            <BiTargetLock className="color_orange" />
            <p className="fz12">Select your location</p>
          </div>

          <div className="d-flex align-items-center gap-4 mt-2">
            <p className="fz12">Standard Delivery , 2 days</p>
            <p className="fz13 fw-semibold">Free</p>
          </div>
          <p className="fz12 mt-1 text-muted lh-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.</p>
        </div>

        <div>
          <MdOutlineKeyboardArrowRight size={22} />
        </div>
      </div>

      <div
        className="offcanvas offcanvas-bottom rounded-top-4"
        tab-index="-1"
        id="offcanvasBottomDelivery"
        aria-labelledby="offcanvasBottomDeliveryLabel"
        style={{ height: "60vh" }}>
        <div className="offcanvas-header">
          <p
            className="offcanvas-title fz18 fw-semibold text-center w-100"
            id="offcanvasBottomDeliveryLabel">
            Delivery
          </p>
          <button
            type="button"
            className="btn-close fz13"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body small">
          <div>
            <div className="d-flex align-items-center justify-content-between ">
              <p className="fz15">Standard Delivery , 2 days</p>
              <p className="fz14 fw-semibold">Free</p>
            </div>
            <p className="fz12 mt-1 text-muted ">Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.</p>
            <hr className="mt-2" />
          </div>

          <p className="fz15 fw-semibold text-muted">Delivery Service</p>
          <div className="d-flex align-items-center gap-2 mt-1 ms-2">
            <IoIosSquare size={9} />
            <p className="fz13"> Cash on Delivery Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
