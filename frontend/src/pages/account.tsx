import React from "react";
import AccountHeader from "../components/account-page/AccountHeader";
import Gems from "../components/account-page/Gems";
import MyOrders from "../components/account-page/MyOrders";
import MyService from "../components/account-page/MyService";
import Footer from "../components/Footer";
import HomeHeroCarousel from "../components/home/HomeHeroCarousel";

export default function Account() {
  return (
    <div
      className="d-flex flex-column position-relative "
      style={{ backgroundColor: "#eef1f5e7", height: "100vh" }}>
      <div className="position-fixed w-100">
        <AccountHeader />
      </div>

      <div
        className="overflow-y-scroll overflow-x-hidden pb-4"
        style={{ height: "92vh" }}>
        <div
          className="bg_color_orange d-flex align-items-center justify-content-center h-25"
          style={{ marginTop: "7vh" }}>
          <button
            type="submit"
            className="btn rounded-1 bg_color_white color_orange w-50 fw-semibold">
            LOGIN / SIGNUP
          </button>
        </div>

        <div className="mt-2">
          <HomeHeroCarousel />
        </div>
        <MyOrders />
        <Gems />
        <MyService />
      </div>

      <div className="position-fixed w-100 bottom-0 bg_color_white">
        <Footer />
      </div>
    </div>
  );
}
