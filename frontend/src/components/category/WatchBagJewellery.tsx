import Image from "next/image";
import React from "react";
import demo from "../../../assets/product/1.jpg";

export default function WatchBagJewellery() {
  return (
    <div
      className="accordion"
      id="women-accordion">
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            Clothing
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#women-accordion">
          <div className="accordion-body d-flex flex-wrap p-0 ">
            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
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

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Hoodies & Sweatshirts</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Sweaters & Cardigans</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Jackets & Coats</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Pants & Leggings</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Jeans</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Shorts</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Skirts</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Dresses</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Party Wear</p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo">
            Traditional Clothing
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#women-accordion">
          <div className="accordion-body"></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree">
            Women Bags
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#women-accordion">
          <div className="accordion-body"></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour">
            Shoes
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#women-accordion">
          <div className="accordion-body"></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive">
            Accessories
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#women-accordion">
          <div className="accordion-body"></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix">
            Lingeries , Sleep & Lounge
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#women-accordion">
          <div className="accordion-body"></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingSeven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven">
            Girl Fashion
          </button>
        </h2>
        <div
          id="collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#women-accordion">
          <div className="accordion-body d-flex gap-1 p-0">
            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold ">Girls Clothing</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold ">Girls Shoes</p>
            </div>

            <div className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-2">
              <div
                className="image_div position-relative"
                style={{ height: "7vh", width: "7vh" }}>
                <Image
                  src={demo}
                  fill
                  alt=""
                />
              </div>
              <p className="fz10 fw-semibold text-center">Girls Accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
