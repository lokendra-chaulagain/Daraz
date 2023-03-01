import React from "react";
import { CiLocationOn } from "react-icons/ci";

export default function HomeCarouselBottomSearch() {
  return (
    <div className="px-3">
      <div className="shadow_0 form-control py-1 border-0 d-flex align-items-center py-2 ">
        <CiLocationOn
          className="color_orange"
          size={18}
        />
        <p className="ms-2"> | </p>
        <input
          type="email"
          className="border-0 ps-3 outline_0 fz14 "
          placeholder="Set your delivery location"
        />
      </div>
    </div>
  );
}
