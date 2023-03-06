import React from "react";
import Image from "next/image";
import product from "../../assets/product/1.jpg";
import { AiFillStar } from "react-icons/ai";
import styles from "../styles/ScrollProductSection.module.css";
import Link from "next/link";

export default function GlobalSingleProduct({ datas }: any) {
  return (
    <div className="d-flex m-0 gap-1  flex-wrap bg_blue_grey">
      {datas &&
        datas.map((data: any, index: any) => (
          <Link
            key={index}
            href={"/product/loki"}
            className="rounded-top-2 pb-2"
            style={{ width: "49%", backgroundColor: "white" }}>
            <div
              className="position-relative rounded-2 overflow-hidden"
              style={{ height: "160px", width: "100%" }}>
              <Image
                src={product}
                fill
                alt="img"
              />
            </div>
            <div className="d-flex flex-column gap-1 px-2">
              <p className={`${styles.product_name} mt-2`}>Lorem ipsum dolor sit amet consectetur.</p>
              <div>
                <AiFillStar
                  size={15}
                  color="orange"
                />
                <span className="fz11">4.9/5 (11) . 57 Sold</span>
              </div>
              <div className={styles.voucher}>Rs.200 Off</div>
              <p className="color_orange">
                <span className="fz11 fw-bolder">Rs.</span>
                <span className="fz16 fw-bold">800</span>
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
