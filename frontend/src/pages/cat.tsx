import { useGetAllSearchTagQuery } from "@/src/redux/api/globalApi";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineFire, AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styles from "../styles/ScrollProductSection.module.css";

import fashion from "../../assets/diamond/fashion.png";
import beauty from "../../assets/diamond/beauty.png";
import recharge from "../../assets/diamond/recharge.png";
import nepali from "../../assets/diamond/nepali.png";
import best from "../../assets/diamond/best.png";
import ProductFilterSection from "../components/ProductFilterSection";
import { TbArrowsUpDown } from "react-icons/tb";
import { CiFilter } from "react-icons/ci";
import product from "../../assets/product/1.jpg";
import { AiFillStar } from "react-icons/ai";

import ProductFilterSection2 from "../components/ProductFilterSection2";
import ScrollProductSection from "../components/home/IndexCategorySelect";

export default function Cat() {
  const { data: tags } = useGetAllSearchTagQuery();

  const randomIndex = tags && Math.floor(Math.random() * tags.length);
  const [currentTag, setCurrentTag] = useState("iphone 11 cover");
  useEffect(() => {
    tags && randomIndex && setCurrentTag(tags[randomIndex].name);
  }, [randomIndex, tags]);

  const datas = [{ name: "All" }, { name: "Mall" }, { name: "Fashion" }, { name: "Beauty" }, { name: "Electronic" }, { name: "Mobiles" }, { name: "Televisions" }, { name: "All" }, { name: "All" }, { name: "All" }];

  return (
    <div
      className="position-relative overflow-scroll z-3"
      style={{ height: "100vh" }}>
      {/* Navbar */}
      <div className="position-fixed top-0 w-100">
        <div className="  d-flex align-items-center justify-content-between gap-2  px-2 py-1 ">
          <Link href={"/"}>
            <MdOutlineArrowBackIos size={23} />
          </Link>

          <div
            className="form-control py-1  rounded-pill "
            style={{ border: "1px solid #fd5403" }}>
            <AiOutlineSearch size={24} />
            <input
              type="text"
              className="border-0 outline_0 bg_white"
              style={{ caretColor: "#fd5403" }}
              placeholder={currentTag ? currentTag : "iphone 11 cover"}
            />
          </div>
          <FiShoppingCart size={28} />
        </div>

        {/* <div className="d-flex align-items-center justify-content-between mt-5 px-2 ">
        <Link href={"/fashion"}>
          <div>
            <div className={`${styles.diamond_image_div}`}>
              <Image
                src={fashion}
                fill
                alt="img"
              />
            </div>
            <p className="fz11 text-center fw-medium ">All</p>
          </div>
        </Link>

        <Link href={"/beauty"}>
          <div>
            <div className={`${styles.diamond_image_div}`}>
              <Image
                src={beauty}
                fill
                alt="img"
              />
            </div>
            <p className="fz11 text-center fw-medium">Mall</p>
          </div>
        </Link>

        <Link href={"/recharge"}>
          <div>
            <div className={`${styles.diamond_image_div}`}>
              <Image
                src={recharge}
                fill
                alt="img"
              />
            </div>
            <p className="fz11 text-center fw-medium">Mart</p>
          </div>
        </Link>

        <Link href={"/proudly-nepali"}>
          <div>
            <div className={`${styles.diamond_image_div}`}>
              <Image
                src={nepali}
                fill
                alt="img"
              />
            </div>
            <p className="fz11 text-center fw-medium">Free Shipping</p>
          </div>
        </Link>
      </div> */}

        <p>Diamond</p>

        <ProductFilterSection />
      </div>

      {/* <ProductFilterSection2 /> */}
      <div className={`${styles.product_section} py-2 px-2 mt-5`}>
        <div>
          <div className="d-flex m-0 gap-1  flex-wrap">
            {datas &&
              datas.map((data, index) => (
                <div
                  key={index}
                  className="rounded-top-2 pb-2"
                  style={{ width: "49%", backgroundColor: "white" }}>
                  <div
                    className="position-relative rounded-2 overflow-hidden"
                    style={{ height: "160px", width: "100%" }}>
                    <Image
                      src={product}
                      fill
                      alt="img"
                    />
                  </div>
                  <div className="d-flex flex-column gap-1 px-2">
                    <p className={`${styles.product_name} mt-2`}>Lorem ipsum dolor sit amet consectetur.</p>
                    <div>
                      <AiFillStar
                        size={15}
                        color="orange"
                      />
                      <span className="fz11">4.9/5 (11) . 57 Sold</span>
                    </div>
                    <div className={styles.voucher}>Rs.200 Off</div>
                    <p className="color_orange">
                      <span className="fz11 fw-bolder">Rs.</span>
                      <span className="fz16 fw-bold">800</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
