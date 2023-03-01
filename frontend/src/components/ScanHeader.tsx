import Link from "next/link";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function ScanHeader() {
  return (
    <div
      className="d-flex align-items-center justify-content-between pt-2"
      style={{ backgroundColor: "grey", color: "white", height: "6vh" }}>
      <Link href={"/"}>
        <MdOutlineArrowBackIos
          className=""
          color="white"
          size={22}
        />
      </Link>
      <p className="fw-semibold fz15">QR Code Reader</p>
      <p></p>
    </div>
  );
}
