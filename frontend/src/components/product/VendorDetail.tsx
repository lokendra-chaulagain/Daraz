import Image from "next/image";
import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineStorefront } from "react-icons/md";
import demo from "../../../assets/login/2.jpg";
import styles from "../../styles/Product.module.css";
import RecommendedBySeller from "./RecommendedBySeller";

export default function VendorDetail() {
  return (
    <div className="bg_color_white mt-1 px-2 py-2">
      <div className="d-flex align-items-center justify-content-between">
        <div className=" d-flex align-items-center gap-2">
          <div className={`${styles.vendor_logo}`}>
            <Image
              src={demo}
              className="rounded-4"
              alt="img"
              fill
            />
          </div>
          <div>
            <p className="h6">Electronest Nepal</p>
            <div className="d-flex align-items-center fz11 mt-1 fw-semibold ">
              <p className="bg_purple color_white px-2">Mall</p>
              <p className="bg_purple_shadow color_purple_dark px-2">Flagship Store</p>
            </div>
          </div>
        </div>

        <div className="px-2 d-flex align-items-center justify-content-center rounded-2 py-1 bg_blue_grey">
          <HiOutlineUser
            className="color_grey cursor_pointer"
            size={16}
            color="black"
          />
          <p className="fz14">56</p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3 ">
        <div className="p-0 d-flex flex-column align-items-center">
          <p className="fw-bold fz18">100%</p>
          <p className="fz11 text-muted text-center">
            Positive <br /> Seller Rating
          </p>
        </div>
        <div className=" d-flex flex-column align-items-center">
          <p className="fw-bold fz18">100%</p>
          <p className="fz11 text-muted text-center">Ship on Time</p>
        </div>
        <div className=" d-flex flex-column align-items-center">
          <p className="fw-bold fz18">100%</p>
          <p className="fz11 text-muted text-center">
            Chat Response <br /> Rate
          </p>
        </div>
      </div>

      <div className=" d-flex align-items-center justify-content-center gap-3 mt-3 ">
        <button
          type="button"
          className="btn outline_button d-flex align-items-center gap-1 color_orange">
          <AiOutlinePlus /> Follow
        </button>
        <button
          type="button"
          className="btn  outline_button d-flex align-items-center gap-1 color_orange">
          <MdOutlineStorefront /> Visit Store
        </button>
      </div>

      <hr />
      <RecommendedBySeller />

    </div>
  );
}
