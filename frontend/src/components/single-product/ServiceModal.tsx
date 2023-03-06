import React from "react";
import { MdOutlineKeyboardArrowRight, MdRedeem } from "react-icons/md";
import { IoIosSquare } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import { AiFillCheckSquare } from "react-icons/ai";

export default function ServiceModal() {
  return (
    <div className="px-2 pb-3  bg_color_white">
      <hr className="my-0 mb-3" />
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottomService"
        aria-controls="offcanvasBottomService"
        className=" d-flex align-items-start gap-4 justify-content-between">
        <p className="fz14 fw-semibold text-muted">Delivery</p>

        <div className="d-flex flex-column align-items-start">
          <div className="d-flex align-items-center gap-1">
            <AiFillCheckSquare
              size={12}
              color="green"
            />
            <p className="fz12">100% Authentic</p>
          </div>

          <div>
            <div className="d-flex align-items-center gap-1">
              <AiFillCheckSquare
                size={12}
                color="green"
              />
              <p className="fz12">14 days easy return</p>
            </div>
            <p className="fz10 ms-3 text-muted">Change of mind is not applicable</p>
          </div>

          <div className="d-flex align-items-center gap-1">
            <AiFillCheckSquare
              size={12}
              color="green"
            />
            <p className="fz12">1 Year Brand Warranty</p>
          </div>
        </div>

        <div>
          <MdOutlineKeyboardArrowRight size={22} />
        </div>
      </div>

      <div
        className="offcanvas offcanvas-bottom rounded-top-4"
        tab-index="-1"
        id="offcanvasBottomService"
        aria-labelledby="offcanvasBottomServiceLabel"
        style={{ height: "60vh" }}>
        <div className="offcanvas-header">
          <p
            className="offcanvas-title fz18 fw-semibold text-center w-100"
            id="offcanvasBottomServiceLabel">
            Service
          </p>
          <button
            type="button"
            className="btn-close fz13"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body small">
          <div className="d-flex flex-column gap-1">
            <div className="d-flex align-items-center gap-1">
              <AiFillCheckSquare
                size={16}
                color="green"
              />
              <p className="fz14">100% Authentic</p>
            </div>
            <hr />
            <div>
              <div className="d-flex align-items-center gap-1">
                <AiFillCheckSquare
                  size={16}
                  color="green"
                />
                <p className="fz14">14 days easy return</p>
              </div>
              <p className="fz12 ms-3 text-muted">Change of mind is not applicable</p>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-1">
              <AiFillCheckSquare
                size={16}
                color="green"
              />
              <p className="fz14">1 Year Brand Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
