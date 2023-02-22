import Image from "next/image";
import React from "react";
import demo from "../../assets/login/2.jpg";
import styles from "../styles/Login.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsApple } from "react-icons/bs";

export default function Login() {
  return (
    <div>
      <div className={`${styles.man_img_div}`}>
        <Image
          src={demo}
          fill
          alt="img"
        />
        <div className={`${styles.login_wrapper}`}>
          <div className={`${styles.create_account}`}>Create an Account</div>

          <div className={`${styles.login_password}`}>Login with Password</div>

          <div className="d-flex align-content-center justify-content-between color_white ">
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
    </div>
  );
}
