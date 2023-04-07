import Link from "next/link";
import React from "react";
import { AiOutlineScan, AiOutlineSearch } from "react-icons/ai";
import { SiRubygems } from "react-icons/si";
import styles from "../../styles/home/HomeHeader.module.css";

export default function HomeHeader() {
  return (
    <div className={`${styles.header_wrapper} pb-1`}>
      <Link href={"/scan"}>
        <div className="d-flex   flex-column">
          <AiOutlineScan size={20} />
          <p className="font_small ">Scan</p>
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
            // placeholder={currentTag ? currentTag : "iphone 11 cover"}
            placeholder="iphone 11 cover"
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
