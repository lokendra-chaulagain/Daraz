import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import fashion from "../../../assets/diamond/fashion.png";
import beauty from "../../../assets/diamond/beauty.png";
import recharge from "../../../assets/diamond/recharge.png";
import nepali from "../../../assets/diamond/nepali.png";
import best from "../../../assets/diamond/best.png";

export default function DiamondRow() {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <div className={`${styles.diamond_image_div}`}>
          <Image
            src={fashion}
            fill
            alt="img"
          />
        </div>
        <p className="font_small text-center">Fashion</p>
      </div>

      <div>
        <div className={`${styles.diamond_image_div}`}>
          <Image
            src={beauty}
            fill
            alt="img"
          />
        </div>
        <p className="font_small text-center">Beauty</p>
      </div>

      <div>
        <div className={`${styles.diamond_image_div}`}>
          <Image
            src={recharge}
            fill
            alt="img"
          />
        </div>
        <p className="font_small text-center">
          Recharge <br /> & Payments
        </p>
      </div>

      <div>
        <div className={`${styles.diamond_image_div}`}>
          <Image
            src={nepali}
            fill
            alt="img"
          />
        </div>
        <p className="font_small text-center">
          Proudly <br /> Nepali
        </p>
      </div>

      <div >
        <div className={`${styles.diamond_image_div}`}>
          <Image
            src={best}
            fill
            alt="img"
          />
        </div>
        <p className="font_small text-center">
          Top <br /> Brands
        </p>
      </div>
    </div>
  );
}
