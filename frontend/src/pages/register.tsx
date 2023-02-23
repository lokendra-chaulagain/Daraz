import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsApple, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import styles from "../styles/Login.module.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleAllField = watch();
  console.log(handleAllField);

  const [optSent, setOptSent] = useState(false);

  const onSubmit = () => {
    console.log("success");
    setOptSent(true);
  };

  const [registerWith, setRegisterWith] = useState("phone");
  const registerWithEmail = () => {
    setRegisterWith("email");
  };

  const registerWithPhone = () => {
    setRegisterWith("phone");
  };
  console.log(registerWith);

  return (
    <div className="d-flex flex-column align-items-center ">
      <div>image logo</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-2 w-100 px-3">
        <div>
          <label className="form-label my-0 mb-1">{registerWith === "phone" ? "Mobile Number" : "Email Address"}r</label>
          <input
            type={registerWith === "phone" ? "text" : "email"}
            className="form-control rounded-1 shadow-none "
            placeholder={registerWith === "phone" ? "Mobile Number" : "Email Address"}
            {...register("phone", { required: true })}
          />
          {errors.phone && <span className="text-danger fw-bold font_small">Phone number required</span>}
        </div>
        <div>
          <label className="form-label my-0 mb-1">OTP Code</label>
          <input
            type="text"
            className="form-control rounded-1 shadow-none "
            placeholder="Code"
            {...register("otp", { required: true })}
          />
          {errors.otp && <span className="text-danger fw-bold font_small"> OTP is required</span>}
        </div>

        {registerWith === "phone" && (
          <span
            onClick={registerWithEmail}
            className="text-primary fw-bold text-end font_small cursor_pointer">
            Register With Email
          </span>
        )}

        {registerWith === "email" && (
          <span
            onClick={registerWithPhone}
            className="text-primary fw-bold text-end font_small cursor_pointer">
            Register With Phone
          </span>
        )}

        {!optSent && (
          <button
            type="submit"
            className="btn rounded-1 bg_color_orange color_white w-100 mt-2">
            Send
          </button>
        )}

        {optSent && (
          <button
            type="button"
            className="btn rounded-1 bg_color_orange color_white w-100 mt-2">
            Next
          </button>
        )}
      </form>

      <div>
        <span
          onClick={registerWithPhone}
          className="fw-bold font_small">
          Register With Phone
        </span>
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
  );
}
