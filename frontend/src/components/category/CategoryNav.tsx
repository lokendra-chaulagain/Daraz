import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart, FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function CategoryNav() {
  return (
    <div className="border_bottom shadow-lg d-flex align-items-center justify-content-between  px-2 pt-2 pb-3 ">
      <Link href={"/"}>
        <MdOutlineArrowBackIos size={20} />
      </Link>

      <div>
        <p className="fz15 fw-medium">Bath & Body</p>
      </div>

      <div className="d-flex align-items-center gap-3">
        <AiOutlineSearch size={24} />
        <FiShoppingCart size={20} />
        <FiMoreHorizontal size={24} />
      </div>
    </div>
  );
}
