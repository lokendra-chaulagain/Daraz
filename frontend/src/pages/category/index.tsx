import CategoryNav from "@/src/components/category/CategoryNav";
import Image from "next/image";
import React from "react";
import { RiUserStarLine } from "react-icons/ri";
import demo from "../../../assets/product/1.jpg";

export default function Category() {
  const categories = [
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
      className="position-relative overflow-hidden"
      style={{ height: "100vh" }}>
      <div
        className="position-fixed w-100 top-0 z-3"
        style={{ backgroundColor: "white", height: "5vh" }}>
        <CategoryNav />
      </div>

      <div className="row mt-5 overflow-scroll ">
        <div
          className="col-3 overflow-y-scroll overflow-x-hidden py-3 bg_blue_grey"
          style={{ height: "95vh" }}>
          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Just for you</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Women Fashion</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Men Fashion</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">
              Watches,Bags, <br /> Jewellery
            </p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Electronic Devices</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">TV & Home Appliances</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Electronic Accessories</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Groceries & Pets</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Babies & Toys</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Home & Lifestyle</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Sports & Outdoor</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Just for you</p>
          </div>

          <div className="d-flex  flex-column align-items-center py-3 px-1 bg_blue_grey ">
            <RiUserStarLine size={20} />
            <p className="fz11 text-center ">Motors,Tools & DIY</p>
          </div>
        </div>

        <div className="col-9">
          {/* <div className="row d-flex ">
            {categories &&
              categories.map((category, index) => (
                <div
                  key={index}
                  className="col-4 bg_color_white   d-flex flex-column align-items-center shadow-sm p-3">
                  <div
                    className="image_div position-relative"
                    style={{ height: "7vh", width: "7vh" }}>
                    <Image
                      src={demo}
                      fill
                      alt=""
                    />
                  </div>
                  <p className="fz10 fw-semibold ">Name</p>
                </div>
              ))}
          </div> */}

          <div>
            <div
              className="accordion"
              id="accordionExample">
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
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
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
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
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
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
