import React from "react";
import SearchHistory from "../components/search/SearchHistory";
import SearchNav from "../components/search/SearchNav";

export default function Search() {
  return (
    <div
      className=""
      style={{ backgroundColor: "white", height: "100vh" }}>
      <SearchNav />
      <SearchHistory />
    </div>
  );
}
