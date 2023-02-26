import React, { useState } from "react";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import CategoryAddDrawer from "./CategoryAddDrawer";
import CategoryEditDrawer from "./BannerEditDrawer";
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from "@/redux/api/globalApi";
import moment from "moment";
import toast from "react-hot-toast";

const columns = [
  {
    title: "Category Name",
    dataIndex: "name",
  },

  {
    title: "Image",
    dataIndex: "image",
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
  },

  {
    title: "Updated At",
    dataIndex: "updatedAt",
  },
];

export default function CategoryViewTable() {
  const { data: categories } = useGetAllCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const success = () => toast.success("Success");
  const failure = () => toast.error("Failed");

  const dataSource =
    categories &&
    categories.map((category, index) => ({
      key: category._id,
      name: category.name,
      image: category.image,
      createdAt: moment(category.createdAt).format("YYYY-MM-DD"),
      updatedAt: moment(category.updatedAt).format("YYYY-MM-DD"),
    }));

  const handleUnSelect = () => {
    setSelectedRowKeys([]);
  };

  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const selectedLength = selectedRowKeys.length;

  const handleDelete = () => {
    try {
      for (const id of selectedRowKeys) {
        deleteCategory(id);
        success();
      }
    } catch (error) {
      console.log(error);
      failure();
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <Button
            type="primary"
            onClick={handleUnSelect}
            disabled={!hasSelected}>
            UnSelect
          </Button>
          <span>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}</span>
        </div>

        <div className="d-flex gap-3">
          <CategoryAddDrawer />
          <CategoryEditDrawer selectedLength={selectedLength} />
          <Button
            onClick={handleDelete}
            className="d-flex align-items-center"
            type="primary"
            icon={<DeleteOutlined />}>
            Delete
          </Button>
        </div>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}
