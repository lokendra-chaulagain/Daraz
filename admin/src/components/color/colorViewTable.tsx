import React, { useState } from "react";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDeleteColorMutation, useGetAllColorQuery } from "@/redux/api/globalApi";
import ColorAddDrawer from "./ColorAddDrawer";
import moment from "moment";
import toast from "react-hot-toast";

const columns = [
  {
    title: "Colors",
    dataIndex: "name",
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
  },
];

export default function ColorViewTable() {
  const { data: colors } = useGetAllColorQuery();
  const [deleteColor] = useDeleteColorMutation();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const success = () => toast.success("Success");
  const failure = () => toast.error("Failed");

  const dataSource =
    colors &&
    colors.map((color, index) => ({
      key: color._id,
      name: color.name,
      createdAt: moment(color.createdAt).format("YYYY-MM-DD"),
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
        deleteColor(id);
        success();
        setSelectedRowKeys([]);
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
          <ColorAddDrawer />

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
