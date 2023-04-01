import { useGetAllSearchTagQuery } from "@/src/redux/api/globalApi";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { FiShoppingCart, FiMoreHorizontal } from "react-icons/fi";

export default function FashionNavbar() {
  // const { data: tags } = useGetAllSearchTagQuery();

  // const randomIndex = tags && Math.floor(Math.random() * tags.length);
  // const [currentTag, setCurrentTag] = useState("iphone 11 cover");
  // useEffect(() => {
  //   tags && randomIndex && setCurrentTag(tags[randomIndex].name);
  // }, [randomIndex, tags]);

  return (
    <div className="border_bottom shadow-lg d-flex align-items-center justify-content-between  px-2 py-1 ">
      <Link href={"/"}>
        <MdOutlineArrowBackIos size={20} />
      </Link>

      <Link href={"/search"}>
        <div
          className="form-control py-1 shadow-sm rounded-pill  "
          style={{ border: "1px solid #fd5403" }}>
          <AiOutlineSearch size={20} />
          <input
            type="text"
            disabled
            className="fz15 border-0 outline_0 bg_color_white"
            style={{ caretColor: "#fd5403" }}
            // placeholder={currentTag ? currentTag : "iphone 11 cover"}
            placeholder="iphone 11 cover"
          />
        </div>
      </Link>

      <div className="d-flex align-items-center gap-3 ">
        <FiShoppingCart size={20} />
        <FiMoreHorizontal size={24} />
      </div>
    </div>
  );
}
