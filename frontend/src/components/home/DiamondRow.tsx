import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import fashion from "../../../assets/diamond/fashion.png";
import beauty from "../../../assets/diamond/beauty.png";
import recharge from "../../../assets/diamond/recharge.png";
import nepali from "../../../assets/diamond/nepali.png";
import best from "../../../assets/diamond/best.png";
import Link from "next/link";

export default function DiamondRow() {
  return (
    <div className="d-flex  align-items-center justify-content-between mt-5 px-2 ">
      <Link href={"/fashion"}>
        <div>
          <div className={`${styles.diamond_image_div}`}>
            <Image
              src={fashion}
              fill
              alt="img"
            />
          </div>
          <p className="fz11 text-center fw-medium ">Fashion</p>
        </div>
      </Link>

      <Link href={"/beauty"}>
        <div>
          <div className={`${styles.diamond_image_div}`}>
            <Image
              src={beauty}
              fill
              alt="img"
            />
          </div>
          <p className="fz11 text-center fw-medium">Beauty</p>
        </div>
      </Link>

      <Link href={"/recharge"}>
        <div>
          <div className={`${styles.diamond_image_div}`}>
            <Image
              src={recharge}
              fill
              alt="img"
            />
          </div>
          <p className="fz11 text-center fw-medium">
            Recharge <br /> & Payments
          </p>
        </div>
      </Link>

      <Link href={"/proudly-nepali"}>
        <div>
          <div className={`${styles.diamond_image_div}`}>
            <Image
              src={nepali}
              fill
              alt="img"
            />
          </div>
          <p className="fz11 text-center fw-medium">
            Proudly <br /> Nepali
          </p>
        </div>
      </Link>

      <Link href={"/top-brands"}>
        <div>
          <div className={`${styles.diamond_image_div}`}>
            <Image
              src={best}
              fill
              alt="img"
            />
          </div>
          <p className="fz11 text-center fw-medium">
            Top <br /> Brands
          </p>
        </div>
      </Link>
    </div>
  );
}
