import Image from "next/image";
import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineStorefront } from "react-icons/md";
import demo from "../../../assets/login/2.jpg";
import styles from "../../styles/Product.module.css";

export default function VendorDetail() {
  return (
    <div>
      <div className="row">
        <div className="col-10 p-0 d-flex align-items-center gap-2">
          <div className={`${styles.vendor_logo}`}>
            <Image
              src={demo}
              className="rounded-circle"
              alt="img"
              fill
            />
          </div>
          <p className="h6">Electronest Nepal</p>
        </div>
        <div className="col-2 p-0  d-flex align-items-center">
          <HiOutlineUser
            className="color_grey cursor_pointer"
            size={20}
          />
          <p>56</p>
        </div>
      </div>

      <div className="row ">
        <div className="col p-0 d-flex flex-column align-items-center">
          <p className="h4">100%</p>
          <p className="font_small text-center">
            Positive <br /> Seller Rating
          </p>
        </div>
        <div className="col p-0 d-flex flex-column align-items-center">
          <p className="h4">100%</p>
          <p className="font_small text-center">
            Positive <br /> Seller Rating
          </p>
        </div>
        <div className="col p-0 d-flex flex-column align-items-center">
          <p className="h4">100%</p>
          <p className="font_small text-center">
            Positive <br /> Seller Rating
          </p>
        </div>
      </div>

      <div className=" d-flex align-items-center justify-content-center gap-3">
        <button
          type="button"
          className="btn outline_button d-flex align-items-center gap-1">
          <AiOutlinePlus /> Follow
        </button>
        <button
          type="button"
          className="btn  outline_button d-flex align-items-center gap-1">
          <MdOutlineStorefront /> Visit Store
        </button>
      </div>
    </div>
  );
}
