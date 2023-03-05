import React from "react";
import { AiOutlineFire, AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import { TbArrowsUpDown } from "react-icons/tb";
import { CiFilter } from "react-icons/ci";

export default function ProductFilterSection() {
  return (
    <div className="row m-0 mt-5">
      <div className="col-10 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-1 fz13 fw-semibold">
          <p>Best Match</p>
          <AiOutlineLike />
        </div>

        <div className="d-flex align-items-center gap-1 fz13 fw-semibold">
          <p>Top Sales</p>
          <AiOutlineFire />
        </div>

        <div className="d-flex align-items-center gap-1 fz13 fw-semibold">
          <p>Price</p>
          <TbArrowsUpDown />
        </div>

        <div className="d-flex align-items-center gap-1 fz13 fw-semibold ">
          <p>New </p>
          <AiOutlineClockCircle />
        </div>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <CiFilter
          size={24}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        />

        <div
          className="offcanvas offcanvas-end"
          tab-Index="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
      </div>
    </div>
  );
}
