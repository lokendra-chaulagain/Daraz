import Link from "next/link";
import React from "react";
import { AiOutlineScan } from "react-icons/ai";
import ScanHeader from "../components/ScanHeader";

export default function Scan() {
  return (
    <div>
      <ScanHeader />
      <div
        className="overflow-hidden d-flex align-items-center justify-content-center"
        style={{ height: "94vh" }}>
        <Link href={"/"}>
          <AiOutlineScan
            size={400}
            color="grey"
          />
        </Link>
      </div>
    </div>
  );
}
