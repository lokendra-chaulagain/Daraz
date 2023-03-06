import React from "react";
import { MdStore } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import styles from "../../styles/Product.module.css";

export default function ProductFooter() {
  return (
    <div
      className="d-flex align-items-center justify-content-between "
      style={{ height: "5vh" }}>
      <MdStore
        className="color_orange cursor_pointer"
        size={24}
      />
      <MdMessage
        className="color_orange cursor_pointer"
        size={24}
      />
      <div className="d-flex h-100">
        <div className={`${styles.footer_buy}`}>Buy Now</div>
        <div className={`${styles.add_cart}`}>Add to Cart</div>
      </div>
    </div>
  );
}
