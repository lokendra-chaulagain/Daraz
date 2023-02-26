import React, { useState } from "react";
import { Button, Table } from "antd";
import BannerAddDrawer from "./BannerAddDrawer";
import BannerEditDrawer from "./BannerEditDrawer";
import { DeleteOutlined } from "@ant-design/icons";
import { useDeleteBannerMutation, useGetAllBannerQuery } from "@/redux/api/globalApi";
import moment from "moment";
import toast from "react-hot-toast";

const columns = [
  {
    title: "Image",
    dataIndex: "image",
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
  },
];

export default function BannerViewTable() {
  const { data: banners } = useGetAllBannerQuery();
  const [deleteBanner] = useDeleteBannerMutation();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const success = () => toast.success("Success");
  const failure = () => toast.error("Failed");

  const dataSource =
    banners &&
    banners.map((banner, index) => ({
      key: banner._id,
      image: banner.image,
      createdAt: moment(banner.createdAt).format("YYYY-MM-DD"),
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
        deleteBanner(id);
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
          <BannerAddDrawer />
          <BannerEditDrawer selectedLength={selectedLength} />

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
