import { useGetAllSearchTagQuery } from "@/src/redux/api/globalApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineScan, AiOutlineSearch } from "react-icons/ai";
import { SiRubygems } from "react-icons/si";

export default function HomeHeader() {
  const { data: tags } = useGetAllSearchTagQuery();
  const [currentTag, setCurrentTag] = useState("iphone 11 cover");
  const randomIndex = tags && Math.floor(Math.random() * tags.length);

  useEffect(() => {
    tags && randomIndex && setCurrentTag(tags[randomIndex].name);
  }, [randomIndex, tags]);

  return (
    <div className="shadow_0  d-flex align-items-center justify-content-between gap-2  px-2 pt-3 pb-1 ">
      <Link href={"/scan"}>
        <div className="d-flex scan_icon_div flex-column">
          <AiOutlineScan size={20} />
          <p className="font_small">Scan</p>
        </div>
      </Link>
      <Link
        className="w-100"
        href={"/search"}>
        <div className="d-flex  align-items-center search_bg_color form-control py-1 border-0 shadow-sm rounded-2">
          <AiOutlineSearch
            size={22}
            color="grey"
          />
          <input
            type="text"
            disabled
            className="border-0 outline_0  "
            style={{ width: "100%", backgroundColor: "transparent" }}
            placeholder={currentTag ? currentTag : "iphone 11 cover"}
          />
        </div>
      </Link>

      <div className="d-flex flex-column">
        <SiRubygems
          color="#A020F0"
          size={20}
        />
        <p className="font_small">Gems</p>
      </div>
    </div>
  );
}
