import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="d-flex align-items-center justify-content-between ">
      <AiFillHome
        className="color_grey cursor_pointer"
        size={24}
      />
      <RiMessage2Fill
        className="color_grey cursor_pointer"
        size={24}
      />
      <FaShoppingCart
        className="color_grey cursor_pointer"
        size={24}
      />
      <FaUser
        className="color_grey cursor_pointer"
        size={24}
      />
    </div>
  );
}
