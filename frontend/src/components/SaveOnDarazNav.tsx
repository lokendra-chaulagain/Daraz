import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart, FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function SaveOnDarazNav({ title }: any) {
  return (
    <div className="border_bottom shadow-lg d-flex align-items-center justify-content-between  px-2 pt-2 pb-3 ">
      <Link href={"/"}>
        <MdOutlineArrowBackIos size={20} />
      </Link>

      <div>
        <p className="fz15 fw-medium">{title}</p>
      </div>

      <div className="d-flex align-items-center gap-3">
        <Link href={"/search"}>
          <AiOutlineSearch size={24} />
        </Link>

        <Link href={"/cart"}>
          <FiShoppingCart size={20} />
        </Link>

        <div className="dropdown ">
          <FiMoreHorizontal
            size={24}
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
          />
          <ul className="dropdown-menu rounded-0 border-0 shadow_0 shadow-sm ">
            <Link href={"/"}>
              <li className="fz14 ps-3 py-2 fw-semibold more_item_hover">Home</li>
            </Link>

            <Link href={"/messages"}>
              <li className="fz14 ps-3 py-2 fw-semibold more_item_hover ">Messages</li>
            </Link>

            <Link href={"/my-account"}>
              <li className="fz14 ps-3 py-2 fw-semibold more_item_hover ">My Account</li>
            </Link>

            <Link href={"/need-help"}>
              <li className="fz14 ps-3 py-2 fw-semibold more_item_hover ">Need Help ?</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
