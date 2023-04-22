import React from "react";
import EditProductTable from "../../components/product/EditProductTable";
import { useRouter } from "next/router";

const Id = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <EditProductTable />{" "}
    </>
  );
};

export default Id;
