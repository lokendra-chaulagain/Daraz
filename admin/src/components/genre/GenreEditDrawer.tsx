import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useGetSingleGenreQuery, useUpdateGenreMutation } from "@/redux/api/globalApi";

export default function GenreEditDrawer({ selectedLength, id }: any) {
  const { data: genre } = useGetSingleGenreQuery(id);
  const [updateGenre] = useUpdateGenreMutation();
  console.log(genre);

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const editHandler = (values: any) => {
    try {
      updateGenre({ id, updatedData: values });
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {selectedLength === 1 ? (
        <Button
          className="d-flex align-items-center"
          type="primary"
          onClick={showDrawer}
          icon={<EditOutlined />}>
          Edit Genre d
        </Button>
      ) : (
        <Button
          className="d-flex align-items-center"
          type="primary"
          disabled
          icon={<EditOutlined />}>
          Edit Genre d
        </Button>
      )}
      <Drawer
        title="Edit genre"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}>
        <Form
          onFinish={editHandler}
          form={form}
          layout="vertical"
          requiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                initialValue={genre && genre.name}
                name="name"
                label="Genre Name"
                rules={[
                  { required: true, message: "This is required field" },
                  { max: 200, message: "Should be less than 200 word" },
                ]}>
                <Input placeholder="New Genre" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="image"
                label="Image"
                rules={[
                  { required: true, message: "This is required field" },
                  { max: 20, message: "Should be less than 20 word" },
                ]}>
                <Input type="file" />
              </Form.Item>
            </Col>
            <Col
              span={24}
              className="d-flex  justify-content-end">
              <Form.Item>
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button
                    onClick={editHandler}
                    htmlType="submit"
                    type="primary">
                    Submit
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}
