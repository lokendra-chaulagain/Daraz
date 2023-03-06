import React from "react";
import { Timeline } from "antd";
import { BsDot } from "react-icons/bs";

export default function ChangeLocationModal({ closeBig, setOpenBigModal }: any) {
  const handleLocationSetSuccess = () => {
    setOpenBigModal(false);
  };

  return (
    <div
      className="position-absolute bottom-0 z-3 shadow-lg"
      style={{ backgroundColor: "white" }}>
      <div style={{ backgroundColor: "#eef1f5e7", width: "100vw" }}>
        <div className="d-flex border_bottom  align-items-center justify-content-between py-3 px-2">
          <p
            onClick={closeBig}
            className="fz14">
            Close
          </p>
          <p className="fz16 fw-semibold">Select your Area</p>
          <p></p>
        </div>

        <div className="bg_color_white d-flex  align-items-center justify-content-between rounded-3 overflow-hidden mx-3 mt-3 py-2 ps-1 pe-3 shadow_0">
          <div className="d-flex align-items-center ">
            <BsDot
              size={30}
              className="color_orange"
            />
            <p className="fz14 fw-semibold">Region</p>
          </div>

          <p className="fz14 text-muted ">Selection below...</p>
        </div>

        <div className="bg_color_white rounded-3 overflow-hidden mx-3 mt-3 shadow_0">
          <Timeline
            className="pt-5 px-3 fw-semibold"
            items={[
              {
                children: "Region Gandaki Provience",
              },
              {
                children: "City Gaindakot",
              },
              {
                children: "Area Kali Gandagi",
              },
            ]}
          />
        </div>

        <p className="fz15 px-4 my-3">Select the Region</p>
        <div
          className="bg_color_white rounded-3 overflow-hidden mx-3 mt-3 shadow_0 p-3 overflow-scroll"
          style={{ height: "30vh" }}>
          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>

          <div className="mb-3 ">
            <p className="fz14 fw-semibold">Bagmati Provience</p>
            <hr className="p-0 m-0 mt-2" />
          </div>
        </div>

        <div className="bg_color_white pp-2 shadow_0 border_top shadow-lg px-3 pb-3">
          <button
            onClick={handleLocationSetSuccess}
            type="submit"
            className="btn rounded-1 bg_color_orange color_white w-100 mt-2">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
