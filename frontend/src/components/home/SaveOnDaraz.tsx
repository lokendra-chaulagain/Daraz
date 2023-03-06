import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFire } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashStack } from "react-icons/bs";
import demo from "../../../assets/product/1.jpg";
import styles from "../../styles/Home.module.css";
import SaveOnDarazProgressBar from "./SaveOnDarazProgressBar";

export default function SaveOnDaraz() {
  return (
    <div className="mt-3 px-2">
      <p className="fz15 fw-semibold ">Save On Daraz</p>

      <div className="d-flex gap-3 justify-content-between mt-1">
        <Link
          href={"/save-on-daraz/freshly-landed"}
          className={`${styles.flash_sale_product_div} px-1 py-3 `}>
          <div className={`${styles.save_on_daraz_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.fire_emoji}`}>
            <AiFillFire size={24} />
          </div>
          <SaveOnDarazProgressBar progress="Newly Arrived" />
          <p className="fz12 fw-semibold text-center mt-2">Freshly Landed</p>
        </Link>

        <Link
          href={"/save-on-daraz/budget-deals"}
          className={`${styles.flash_sale_product_div} px-1 py-3 `}>
          <div className={`${styles.save_on_daraz_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.fire_emoji}`}>
            <BsCashStack size={20} />
          </div>
          <SaveOnDarazProgressBar progress="Shop Under 999" />
          <p className="fz12 fw-semibold text-center mt-2">Budget Deals</p>
        </Link>

        <Link
          href={"/save-on-daraz/faster-delivery"}
          className={`${styles.flash_sale_product_div} px-1 py-3 `}>
          <div className={`${styles.save_on_daraz_img_div}`}>
            <Image
              src={demo}
              alt="img"
              fill
            />
          </div>
          <div className={`${styles.fire_emoji}`}>
            <TbTruckDelivery size={24} />
          </div>
          <SaveOnDarazProgressBar progress="Fast Delivery" />
          <p className="fz12 fw-semibold text-center mt-2">Faster Delivery</p>
        </Link>
      </div>
    </div>
  );
}
