import React from "react";
import SizeTable from "../components/size/SizeTable";
import Header from "../components/Header";

export default function size() {
  return (
    <div>
      <Header pageTitle={"Sizes"} />
      <SizeTable />
    </div>
  );
}
