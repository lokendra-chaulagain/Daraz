import React from "react";
import Header from "../../components/Header";
import CategoryTable from "../../components/category/CategoryTable";
import Table from "../../components/mini-category/Table";

function Category() {
  return (
    <>
      <Header pageTitle={"Categories"} />
      <Table/>
    </>
  );
}
export default Category;
