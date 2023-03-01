import Image from "next/image";
import React from "react";
import fashion from "../../../assets/fashion/banner.png";

export default function FashionBanner() {
  return (
    <div style={{ position: "relative", height: "15vh" }}>
      <Image
        src={fashion}
        fill
        alt="banner img"
      />
    </div>
  );
}
