import React from "react";
import { SiRubygems } from "react-icons/si";

export default function Gems() {
  return (
    <div className="d-flex align-items-center justify-content-between  px-2 py-3 bg_color_white mt-2">
      <div className="d-flex align-items-center gap-2">
        <SiRubygems
          color="#A020F0"
          size={20}
        />
        <p className="fz15 fw-bold">Gems</p>
      </div>
      <p className="fz13 color_orange fw-semibold">Earn / Redeem Gems</p>
    </div>
  );
}
