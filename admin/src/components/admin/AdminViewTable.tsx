import React, { useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import CategoryAddDrawer from "./AdminAddDrawer";
import CategoryEditDrawer from "./AdminEditDrawer";
import AdminAddDrawer from "./AdminAddDrawer";
import AdminEditDrawer from "./AdminEditDrawer";

interface DataType {
  key: React.Key;
  username: string;
  name: string;
  createdAt: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Image",
    dataIndex: "name",
  },

  {
    title: "Added By",
    dataIndex: "username",
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    username: "loki",
    createdAt: "2020/3/3",
  });
}

export default function AdminViewTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}>
            Reload
          </Button>
          <span>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}</span>
        </div>

        <div className="d-flex gap-3">
          <AdminAddDrawer />
          <AdminEditDrawer />

          <Button
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
        dataSource={data}
      />
    </div>
  );
}
