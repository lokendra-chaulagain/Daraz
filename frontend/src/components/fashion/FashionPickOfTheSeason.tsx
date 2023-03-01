import Image from "next/image";
import React from "react";
import pick from "../../../assets/fashion/yellow-line.png";
import demo from "../../../assets/login/1.jpg";

export default function FashionPickOfTheSeason() {
  return (
    <div className="overflow-hidden px-2">
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ position: "relative", width: "60vw", height: "10vh" }}>
          <Image
            src={pick}
            fill
            alt="banner img"
          />
        </div>
      </div>

      <div className="row gap-2 p-0">
        <div
          className="col p-0 d-flex align-items-end justify-content-center  rounded-2 p-2"
          style={{ backgroundColor: "#E7FEFF" }}>
          <p className="fz18 color_purple fw-semibold">Leathers</p>
          <div
            className="rounded-circle overflow-hidden"
            style={{ position: "relative", width: "75px", height: "75px" }}>
            <Image
              src={demo}
              fill
              alt="banner img"
            />
          </div>
        </div>

        <div
          className="col p-0 d-flex align-items-end justify-content-center rounded-2 p-2"
          style={{ backgroundColor: "#BCE6DD" }}>
          <p className="fz18 color_purple fw-semibold">Jewellery</p>
          <div
            className="rounded-circle overflow-hidden"
            style={{ position: "relative", width: "75px", height: "75px" }}>
            <Image
              src={demo}
              fill
              alt="banner img"
            />
          </div>
        </div>

        <div
          className="col p-0 d-flex align-items-end justify-content-center  rounded-2 p-2"
          style={{ backgroundColor: "#E7FEFF" }}>
          <p className="fz18 color_purple fw-semibold">Sweatshirts</p>
          <div
            className="rounded-circle overflow-hidden"
            style={{ position: "relative", width: "75px", height: "75px" }}>
            <Image
              src={demo}
              fill
              alt="banner img"
            />
          </div>
        </div>

        <div
          className="col p-0 d-flex align-items-end justify-content-center rounded-2 p-2"
          style={{ backgroundColor: "#BCE6DD" }}>
          <p className="fz18 color_purple fw-semibold">Accessories</p>
          <div
            className="rounded-circle overflow-hidden"
            style={{ position: "relative", width: "75px", height: "75px" }}>
            <Image
              src={demo}
              fill
              alt="banner img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
