import React from "react";
import Header from "../../components/Header";
import CategoryTable from "../../components/category/CategoryTable";

function Category() {
  return (
    <>
      <Header pageTitle={"Categories"} />
      <CategoryTable />
    </>
  );
}
export default Category;
