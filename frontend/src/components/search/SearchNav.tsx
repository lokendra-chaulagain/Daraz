import { useGetAllSearchTagQuery } from "@/src/redux/api/globalApi";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Link from "next/link";

export default function SearchNav() {
  const { data: tags } = useGetAllSearchTagQuery();

  const randomIndex = tags && Math.floor(Math.random() * tags.length);
  const [currentTag, setCurrentTag] = useState("iphone 11 cover");
  useEffect(() => {
    tags && randomIndex && setCurrentTag(tags[randomIndex].name);
  }, [randomIndex, tags]);

  return (
    <div className=" d-flex align-items-center justify-content-between gap-2  px-2 py-1 bg-secondary">
      <Link href={"/"}>
        <MdOutlineArrowBackIos color="fd5403" size={23} />
      </Link>

      <div
        className="form-control py-1 shadow-sm rounded-pill "
        style={{ border: "1px solid #fd5403" }}>
        <AiOutlineSearch size={24} />
        <input
          type="text"
          className="border-0 outline_0 bg_color_white"
          style={{ caretColor: "#fd5403" }}
          placeholder={currentTag ? currentTag : "iphone 11 cover"}
        />
      </div>

      <button
        type="button"
        className="btn rounded-pill px-4 py-1 bg_color_orange color_white ">
        Search
      </button>
    </div>
  );
}
