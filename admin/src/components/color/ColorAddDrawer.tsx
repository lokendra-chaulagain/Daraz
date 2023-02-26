import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useCreateColorMutation } from "@/redux/api/globalApi";
import toast from "react-hot-toast";

export default function ColorAddDrawer() {
  const [createColor] = useCreateColorMutation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const succeed = () => toast.success("Success");
  const Failed = () => toast.error("Failed");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const createHandler = (values: any) => {
    try {
      createColor(values);
      form.resetFields();
      succeed();
    } catch (error) {
      console.log(error);
      Failed();
    }
  };

  return (
    <>
      <Button
        className="d-flex align-items-center"
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}>
        Add Color
      </Button>
      <Drawer
        title="Create a new color"
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
                label="Color"
                rules={[{ required: true, message: "Please enter  color", max: 10 }]}>
                <Input placeholder="New Color" />
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
