import React, { useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import SearchTagAddDrawer from "./SearchTagAddDrawer";
import { useGetAllSearchTagQuery } from "@/redux/api/globalApi";

interface DataType {
  key: React.Key;
  name: string;
  addedBy: string;
  createdAt: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Tag",
    dataIndex: "name",
  },

  {
    title: "Added By",
    dataIndex: "addedBy",
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
  },
];

export default function SearchTagViewTable() {
  const { data: tags } = useGetAllSearchTagQuery();
  console.log(tags);

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      addedBy: "loki",
      createdAt: "2020/3/3",
    });
  }

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
          <SearchTagAddDrawer />

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
