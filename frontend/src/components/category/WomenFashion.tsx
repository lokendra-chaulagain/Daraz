import Image from "next/image";
import React from "react";
import { RiUserStarLine } from "react-icons/ri";
import demo from "../../../assets/product/1.jpg";

export default function WomenFashion() {
  const datas = [
    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },
    {
      name: "Webcams",
    },
    {
      name: "Webcams",
    },

    {
      name: "Webcams",
    },
  ];

  

  return (
    <div
      className="accordion"
      id="women-accordion">
      {datas.map((data: any, index: any) => (
        <div
          key={index}
          className="accordion-item">
          <h2
            className="accordion-header"
            id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseOne-${index}`}
              aria-expanded="false"
              aria-controls="collapseOne">
              Clothing
            </button>
          </h2>
          <div
            id={`collapseOne-${index}`}
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#women-accordion">
            <div className="accordion-body d-flex flex-wrap p-0 ">
              <div className="col-4 bg_white   d-flex flex-column align-items-center shadow-sm p-2">
                <div
                  className="image_div position-relative"
                  style={{ height: "7vh", width: "7vh" }}>
                  <Image
                    src={demo}
                    fill
                    alt=""
                  />
                </div>
                <p className="fz10 fw-semibold text-center">Tops & Shirts</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
