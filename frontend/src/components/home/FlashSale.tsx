import Image from "next/image";
import React from "react";
import demo from "../../../assets/product/1.jpg";
import styles from "../../styles/Home.module.css";
import SoldProgressBar from "./SoldProgressBar";

export default function FlashSale() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <p>Flash Sale</p>
        <p>SEE MORE</p>
      </div>

      <div className="d-flex gap-3 justify-content-between">
        <div className={`${styles.flash_sale_product_div} `}>
          <div className={`${styles.flash_sale_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.flash_sale_off}`}>-40%</div>
          <SoldProgressBar progress="30" />
        </div>

        <div className={`${styles.flash_sale_product_div} `}>
          <div className={`${styles.flash_sale_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.flash_sale_off}`}>-40%</div>
          <SoldProgressBar progress="30" />
        </div>

        <div className={`${styles.flash_sale_product_div} `}>
          <div className={`${styles.flash_sale_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.flash_sale_off}`}>-40%</div>
          <SoldProgressBar progress="30" />
        </div>
      </div>
    </div>
  );
}
