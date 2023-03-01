import Image from "next/image";
import React from "react";
import demo from "../../assets/product/1.jpg";
import logo from "../../assets/1/logo-white.png";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import styles from "../styles/Login.module.css";

export default function LoginRedirectCard() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        className="position-relative"
        style={{ height: "45vh", width: "100%" }}>
        <Image
          src={demo}
          fill
          alt="img"
        />
      </div>

      <div
        className="bg_color_orange d-flex flex-column gap-3 align-items-center justify-content-center"
        style={{ height: "55vh" }}>
        <div
          className="position-relative"
          style={{ height: "7vh", width: "40%" }}>
          <Image
            src={logo}
            fill
            className="d-flex"
            alt="img"
          />
        </div>
        <p className="w-50 text-center color_white fw-semibold">MILLION PRODUCTS AT UNBEATABLE PRICE</p>

        <button
          type="submit"
          className="btn rounded-1 bg_color_white color_orange w-75 fw-semibold">
          Create an Account
        </button>
        <button
          type="submit"
          className="btn rounded-1  color_white w-75 fw-semibold"
          style={{ border: "1px solid white" }}>
          Login with Password
        </button>
        <span className="fw-bold fz11  color_white">CONNECT WITH OTHER WAYS</span>
        <div className="d-flex  align-content-center justify-content-between color_white w-50 ">
          <div className={`${styles.facebook}`}>
            <FaFacebookF size={22} />
          </div>

          <div className={`${styles.google}`}>
            <BsGoogle size={22} />
          </div>

          <div className={`${styles.apple}`}>
            <BsApple size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}
