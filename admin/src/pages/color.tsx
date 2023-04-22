import React from "react";
import ColorTable from "../components/color/ColorTable";
import Header from "../components/Header";

export default function Color() {
  return (
    <div>
      <Header pageTitle={"Colors"} />
      <ColorTable />
    </div>
  );
}
