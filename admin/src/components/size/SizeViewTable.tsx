import React, { useState } from "react";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDeleteSizeMutation, useGetAllSizeQuery } from "@/redux/api/globalApi";
import SizeAddDrawer from "./SizeAddDrawer";
import moment from "moment";
import toast from "react-hot-toast";

const columns = [
  {
    title: "Sizes",
    dataIndex: "name",
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
  },
];

export default function SizeViewTable() {
  const { data: sizes } = useGetAllSizeQuery();
  const [deleteSize] = useDeleteSizeMutation();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const success = () => toast.success("Success");
  const failure = () => toast.error("Failed");

  const dataSource =
    sizes &&
    sizes.map((size, index) => ({
      key: size._id,
      name: size.name,
      createdAt: moment(size.createdAt).format("YYYY-MM-DD"),
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

  const handleDelete = () => {
    try {
      for (const id of selectedRowKeys) {
        deleteSize(id);
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
            Unselect
          </Button>
          <span>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}</span>
        </div>

        <div className="d-flex gap-3">
          <SizeAddDrawer />

          <Button
            onClick={handleDelete}
            disabled={!hasSelected}
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
