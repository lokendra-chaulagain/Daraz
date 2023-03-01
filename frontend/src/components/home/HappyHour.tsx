import Image from "next/image";
import React from "react";
import demo from "../../../assets/1/happy-hour.png";

export default function HappyHour() {
  return (
    <div
      className="position-relative mt-2 "
      style={{ height: "16vh" }}>
      <Image
        src={demo}
        alt=""
        fill
      />
    </div>
  );
}
