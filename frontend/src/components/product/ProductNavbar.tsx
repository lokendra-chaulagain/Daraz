import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsShare, BsCartDash } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";


export default function ProductNavbar() {
  return (
    <div className="shadow_0 d-flex align-items-center justify-content-between gap-2  pb-1 px-2 ">
      <div className="d-flex flex-column">
        <MdOutlineArrowBackIos size={24} />
      </div>
      <div className="form-control py-1 rounded-2">
        <AiOutlineSearch size={24} />
        <input
          type="email"
          className="border-0"
          placeholder="Search in Daraz"
        />
      </div>

      <BsShare size={26} />
      <BsCartDash
        className="mx-2"
        size={28}
      />
      <FiMoreHorizontal size={30} />
    </div>
  );
}
