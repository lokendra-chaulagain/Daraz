import React from "react";
import GlobalSingleProduct from "../GlobalSingleProduct";

export default function PeopleAlsoViewed() {
  const datas = [{ name: "All" }, { name: "Mall" }, { name: "Fashion" }, { name: "Beauty" }, { name: "Electronic" }, { name: "Mobiles" }, { name: "Televisions" }, { name: "All" }, { name: "All" }, { name: "All" }];
  return (
    <div className="my-3">
      <div className="d-flex align-items-center justify-content-center gap-1">
        <p style={{ height: "10px", width: "6px", backgroundColor: "#fd5403" }}></p>
        <p style={{ height: "10px", width: "6px", backgroundColor: "#fd5403" }}></p>
        <p style={{ height: "10px", width: "6px", backgroundColor: "#fd5403" }}></p>

        <p className="fz15 fw-semibold text-muted">People Who Viewed This Item Also Viewed</p>

        <p style={{ height: "10px", width: "6px", backgroundColor: "#fd5403" }}></p>
        <p style={{ height: "10px", width: "6px", backgroundColor: "#fd5403" }}></p>
        <p style={{ height: "10px", width: "6px", backgroundColor: "#fd5403" }}></p>
      </div>

     <div className="mt-3">
     <GlobalSingleProduct datas={datas} />
     </div>
    </div>
  );
}
