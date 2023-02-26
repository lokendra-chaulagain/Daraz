import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useCreateSizeMutation } from "@/redux/api/globalApi";

export default function SizeAddDrawer() {
  const [createSize] = useCreateSizeMutation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const createHandler = (values: any) => {
    try {
      createSize(values);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        className="d-flex align-items-center"
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}>
        Add Size
      </Button>
      <Drawer
        title="Create a new size"
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
                label="Size"
                rules={[{ required: true, message: "Please enter  size", max: 3 }]}>
                <Input placeholder="New Size" />
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
