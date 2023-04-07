import SaveOnDarazNav from "@/src/components/SaveOnDarazNav";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import product from "../../../assets/product/1.jpg";
import styles from "../../styles/ScrollProductSection.module.css";

export default function SaveOnDarazSlug() {
  const datas = [{ name: "All" }, { name: "Mall" }, { name: "Fashion" }, { name: "Beauty" }, { name: "Electronic" }, { name: "Mobiles" }, { name: "Televisions" }, { name: "All" }, { name: "All" }, { name: "All" }];

  const router = useRouter();
  const path = router.query.slug;
  console.log(path);

  const [title, setTitle] = useState("");
  useEffect(() => {
    {
      path === "freshly-landed" && setTitle("New Arrivals");
    }
    {
      path === "budget-deals" && setTitle("Everything Under 999");
    }
    {
      path === "faster-delivery" && setTitle("Faster Delivery");
    }
  }, [path]);

  return (
    <div
      className="position-relative"
      style={{ height: "100vh" }}>
      <div className="position-fixed w-100 bg_white z-3">
        <SaveOnDarazNav title={title} />
      </div>

      <div className="pt-5 d-flex m-0 gap-1  flex-wrap bg_blue_grey">
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
  );
}
