import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import UserAddDrawer from "./UserAddDrawer";

interface DataType {
  key: React.Key;
  username: string;
  name: string;
  email: string;
  phone: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },

  {
    title: "Username",
    dataIndex: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    phone: 32,
    address: `London, Park Lane no. ${i}`,
    username: "loki",
    email: "loki@fgmail.com",
  });
}

export default function UserViewTable() {
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
          <UserAddDrawer/>
          <Button type="primary">View</Button>
          <Button type="primary">Edit</Button>
          <Button type="primary">Delete</Button>
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
