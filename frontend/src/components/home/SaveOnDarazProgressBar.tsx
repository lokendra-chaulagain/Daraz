import React from "react";

export default function SaveOnDarazProgressBar({ progress }: any) {
  const ParentDiv = {
    width: "100%",
    backgroundColor: "orange",
    borderRadius: 40,
    height: "13px",
  };

  const ChildDiv = {
    width: `${90}%`,
    backgroundColor: "red",
    borderRadius: 40,
    height: "13px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "7px",
    gap: "5px",
    fontSize: "10px",
    color: "white",
  };

  const progressText = {
    color: "white",
    fontWeight: 700,
  };

  return (
    <div style={ParentDiv}>
      <div style={ChildDiv}>
        <span style={progressText}>{`${progress}`}</span>
      </div>
    </div>
  );
}
