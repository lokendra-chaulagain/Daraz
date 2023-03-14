import React from "react";
import { MdOutlinePayment, MdOutlineLocalShipping, MdOutlineRateReview, MdOutlineFreeCancellation } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { TbTruckReturn } from "react-icons/tb";

export default function MyOrders() {
  return (
    <div className="px-2 py-3 bg_color_white  mt-2">
      <div className="d-flex align-items-center justify-content-between">
        <p className="fz14 fw-bold">My Orders</p>
        <p className="fz12 color_orange fw-semibold">View All</p>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex flex-column align-items-center">
          <MdOutlinePayment size={28} />
          <p className="fz13 fw-semibold">To Pay</p>
        </div>

        <div className="d-flex flex-column align-items-center">
          <MdOutlineLocalShipping size={28} />
          <p className="fz13 fw-semibold">To Ship</p>
        </div>

        <div className="d-flex flex-column align-items-center">
          <GiReceiveMoney size={28} />
          <p className="fz13 fw-semibold">To Receive</p>
        </div>

        <div className="d-flex flex-column align-items-center">
          <MdOutlineRateReview size={28} />
          <p className="fz13 fw-semibold">To Review</p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-4">
        <div className="d-flex gap-2 align-items-center">
          <TbTruckReturn size={28} />
          <p className="fz13 fw-semibold">My Returns</p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <MdOutlineFreeCancellation size={28} />
          <p className="fz13 fw-semibold">My Cancellations</p>
        </div>
      </div>
    </div>
  );
}
