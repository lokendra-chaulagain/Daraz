import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useCreateGenreMutation } from "@/redux/api/globalApi";
import toast from "react-hot-toast";

export default function GenreAddDrawer() {
  const [createGenre] = useCreateGenreMutation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const success = () => toast.success("Success");
  const failure = () => toast.error("failure");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const createHandler = (values: any) => {
    try {
      createGenre(values);
      form.resetFields();
      success();
    } catch (error) {
      console.log(error);
      failure();
    }
  };

  return (
    <>
      <Button
        className="d-flex align-items-center"
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}>
        Add Genre
      </Button>
      <Drawer
        title="Create a new genre"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}>
        <Form
          onFinish={createHandler}
          form={form}
          layout="vertical"
          requiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Genre Name"
                rules={[
                  { required: true, message: "This is required field" },
                  { max: 20, message: "Should be less than 20 word" },
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
                  { max: 200, message: "Should be less than 200 word" },
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
                    // onClick={onClose}
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
