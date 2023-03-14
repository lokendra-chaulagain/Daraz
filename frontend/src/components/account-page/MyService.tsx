import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineRateReview, MdOutlinePayments, MdSupportAgent } from "react-icons/md";

export default function MyService() {
  return (
    <div className="px-2 py-3  bg_color_white mt-2">
      <p className="fz15 fw-bold">My Services</p>

      <div className="row d-flex align-items-center justify-content-between mt-2">
        <div className=" col-3 d-flex flex-column align-items-center">
          <AiOutlineMail size={28} />
          <p className="fz12 text-center fw-semibold ">My Messages</p>
        </div>

        <div className=" col-3 d-flex flex-column align-items-center">
          <MdOutlinePayments size={28} />
          <p className="fz12 text-center fw-semibold ">Payment Options</p>
        </div>

        <div className=" col-3 d-flex flex-column align-items-center">
          <FiHelpCircle size={28} />
          <p className="fz12 text-center fw-semibold ">Help Center</p>
        </div>

        <div className=" col-3 d-flex flex-column align-items-center">
          <MdSupportAgent size={28} />
          <p className="fz12 text-center fw-semibold ">Chat with Us</p>
        </div>

        <div className=" col-3 d-flex flex-column align-items-center mt-3">
          <MdOutlineRateReview size={28} />
          <p className="fz12 text-center fw-semibold ">My Review</p>
        </div>
      </div>
    </div>
  );
}
