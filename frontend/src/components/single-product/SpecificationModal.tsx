import React from "react";
import { MdOutlineKeyboardArrowRight, MdRedeem } from "react-icons/md";
import { IoIosSquare } from "react-icons/io";

export default function SpecificationModal() {
  return (
    <div className="bg_color_white mt-1 px-2 py-3">
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
        className=" d-flex align-items-center justify-content-between">
        <p className="fz14 fw-semibold text-muted">Specification</p>
        <p className="fz13">Brand,Box Content,SKU</p>
        <MdOutlineKeyboardArrowRight size={22} />
      </div>

      <div
        className="offcanvas offcanvas-bottom rounded-top-4"
        tab-index="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        style={{ height: "60vh" }}>
        <div className="offcanvas-header">
          <p
            className="offcanvas-title fz18 fw-semibold text-center w-100"
            id="offcanvasBottomLabel">
            Specification
          </p>
          <button
            type="button"
            className="btn-close fz13"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body small">
          <div>
            <p className="fz14 fw-semibold">Brand</p>
            <div
              className="d-flex align-items-center gap-2 mt-1 ms-2"
              style={{ color: "grey" }}>
              <IoIosSquare size={9} />
              <p className="fz13">Fantech</p>
            </div>
          </div>

          <div className="mt-3">
            <p className="fz14 fw-semibold">Box Content</p>
            <div
              className="d-flex align-items-center gap-2 mt-1 ms-2"
              style={{ color: "grey" }}>
              <IoIosSquare size={9} />
              <p className="fz13">GP12 Gaming Controller for Pc and Grip Wire</p>
            </div>
          </div>


          <div className="mt-3">
            <p className="fz14 fw-semibold">SKU</p>
            <div
              className="d-flex align-items-center gap-2 mt-1 ms-2"
              style={{ color: "grey" }}>
              <IoIosSquare size={9} />
              <p className="fz13">110994847464NP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
