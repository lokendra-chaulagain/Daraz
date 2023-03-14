import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export default function AccountHeader() {
  return (
    <div
      className="d-flex align-items-center justify-content-between pt-2 px-2 bg_color_orange"
      style={{ color: "white", height: "6vh" }}>
      <div className="d-flex align-items-center gap-2">
        <FaRegUserCircle
          className=""
          color="white"
          size={22}
        />
        <p className="fz13">Hello, Welcome to Daraz !</p>
      </div>

      <FiSettings
        className=""
        color="white"
        size={20}
      />
    </div>
  );
}
