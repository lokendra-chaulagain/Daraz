import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsShare, BsCartDash } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import Link from "next/link";

export default function ProductNavbar() {
  return (
    <div className="shadow_0 d-flex bg_color_white shadow-sm border_bottom align-items-center justify-content-between gap-2 p-2 ">
      <div className="d-flex flex-column">
        <MdOutlineArrowBackIos size={22} />
      </div>

      <Link
        href={"/search"}
        className="form-control border-0 py-1 bg_blue_grey rounded-2">
        <AiOutlineSearch size={24} />
        <input
          type="email"
          className="border-0 outline_0 bg_blue_grey"
          placeholder="Search in Daraz"
        />
      </Link>

      <div className="d-flex align-items-center gap-3">
        <BsShare size={20} />

        <Link href={"/cart"}>
          <BsCartDash size={22} />
        </Link>

        <FiMoreHorizontal size={24} />
      </div>
    </div>
  );
}
