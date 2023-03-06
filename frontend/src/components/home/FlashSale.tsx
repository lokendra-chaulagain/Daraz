import Image from "next/image";
import Link from "next/link";
import React from "react";
import demo from "../../../assets/product/1.jpg";
import styles from "../../styles/Home.module.css";
import SoldProgressBar from "./SoldProgressBar";

export default function FlashSale() {
  return (
    <div className="mt-3 px-2">
      <div className="d-flex align-items-center justify-content-between ">
        <div className="d-flex align-items-center gap-2">
          <p className="fz15 fw-semibold">Flash Sale</p>
          <div className="fz11 fw-semibold color_white d-flex gap-1">
            <p
              className="px-1 rounded-1"
              style={{ backgroundColor: "black" }}>
              03
            </p>
            <p
              className="px-1 rounded-1"
              style={{ backgroundColor: "black" }}>
              55
            </p>
            <p
              className="px-1 rounded-1"
              style={{ backgroundColor: "black" }}>
              11
            </p>
          </div>
        </div>
        <Link href={"/flash-sale"}>
          <p className="fz12 fw-semibold color_orange">SEE MORE</p>
        </Link>
      </div>

      <div className="d-flex gap-3 justify-content-between mt-1">
        <div className={`${styles.flash_sale_product_div} py-1`}>
          <div className={`${styles.flash_sale_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.flash_sale_off}`}>-40%</div>
          <SoldProgressBar progress="30" />
          <p className="color_orange d-flex align-items-center justify-content-start px-1 mt-1 w-100">
            <span className="fz11 fw-bolder">Rs.</span>
            <span className="fz14 fw-bold">800</span>
          </p>
        </div>

        <div className={`${styles.flash_sale_product_div} py-1`}>
          <div className={`${styles.flash_sale_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.flash_sale_off}`}>-40%</div>
          <SoldProgressBar progress="30" />
          <p className="color_orange d-flex align-items-center justify-content-start px-1 mt-1 w-100">
            <span className="fz11 fw-bolder">Rs.</span>
            <span className="fz14 fw-bold">800</span>
          </p>
        </div>

        <div className={`${styles.flash_sale_product_div} py-1`}>
          <div className={`${styles.flash_sale_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.flash_sale_off}`}>-40%</div>
          <SoldProgressBar progress="30" />
          <p className="color_orange d-flex align-items-center justify-content-start px-1 mt-1 w-100">
            <span className="fz11 fw-bolder">Rs.</span>
            <span className="fz14 fw-bold">800</span>
          </p>
        </div>
      </div>
    </div>
  );
}
