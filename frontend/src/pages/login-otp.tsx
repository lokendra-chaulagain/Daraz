import React from "react";
import { useForm } from "react-hook-form";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import styles from "../styles/Login.module.css";

export default function LoginOtp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleAllField = watch();
  console.log(handleAllField);

  const onSubmit = () => {
    console.log("success");
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center ">
        <div>image logo</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column gap-2 w-100 px-3">
          <div>
            <label className="form-label my-0 mb-1">Mobile Number</label>
            <input
              type="text"
              className="form-control rounded-1 shadow-none "
              placeholder="Mobile Number"
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
          <div className="d-flex align-items-center justify-content-between">
            <span className="text-primary fw-bold text-end font_small cursor_pointer">Register</span>
            <span className="text-primary fw-bold text-end font_small cursor_pointer">Forgot Password?</span>
          </div>

          <button
            type="submit"
            className="btn rounded-1 bg_color_orange color_white w-100 mt-2">
            Send
          </button>

          <button
            type="button"
            className="btn rounded-1 bg_color_orange color_white w-100 mt-2">
            Next
          </button>
        </form>
        <div>
          <span className="fw-bold font_small">CONNECT WITH OTHER WAYS</span>
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
    </>
  );
}
