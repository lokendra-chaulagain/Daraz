import React from "react";
import { AiOutlineScan, AiOutlineSearch } from "react-icons/ai";
import { SiRubygems } from "react-icons/si";

export default function HomeHeader() {
  return (
    <div className="shadow_0 d-flex align-items-center justify-content-between gap-2  pb-1 px-2 ">
      <div className="d-flex flex-column">
        <AiOutlineScan size={22} />
        <p className="font_small">Scan</p>
      </div>
      <div className="form-control py-1 rounded-2">
        <AiOutlineSearch size={24} />
        <input
          type="email"
          className="border-0"
          placeholder="iphone 11 cover"
        />
      </div>
      <SiRubygems
        size={26}
        color="#A020F0"
      />
    </div>
  );
}
