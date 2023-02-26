import React, { useState } from "react";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDeleteGenreMutation, useGetAllGenreQuery } from "@/redux/api/globalApi";
import GenreAddDrawer from "./GenreAddDrawer";
import GenreEditDrawer from "./GenreEditDrawer";
import moment from "moment";

const columns = [
  {
    title: "Genre Name",
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

export default function GenreViewTable() {
  const { data: genres } = useGetAllGenreQuery();
  const [deleteGenre] = useDeleteGenreMutation();
  console.log(genres);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const dataSource =
    genres &&
    genres.map((genre, index) => ({
      key: genre._id,
      name: genre.name,
      image: genre.image,
      createdAt: moment(genre.createdAt).format("YYYY-MM-DD"),
      updatedAt: moment(genre.updatedAt).format("YYYY-MM-DD"),
    }));

  const handleUnSelect = () => {
    setLoading(true);
    setSelectedRowKeys([]);
    setLoading(false);
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
  const selectedLength = selectedRowKeys.length;
  console.log(selectedRowKeys[0]);

  const id: any = selectedRowKeys[0];
  console.log(typeof id);
  const handleDelete = () => {
    try {
      deleteGenre(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <Button
            type="primary"
            onClick={handleUnSelect}
            disabled={!hasSelected}
            loading={loading}>
            Unselect
          </Button>
          <span>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}</span>
        </div>

        <div className="d-flex gap-3">
          <GenreAddDrawer />
          <GenreEditDrawer
            selectedLength={selectedLength}
            id={id}
          />

          <Button
            className="d-flex align-items-center"
            type="primary"
            onClick={handleDelete}
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
