import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useCreateBannerMutation } from "@/redux/api/globalApi";
import toast from "react-hot-toast";

export default function BannerAddDrawer() {
  const [createBanner] = useCreateBannerMutation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const success = () => toast.success("Success");
  const failure = () => toast.error("Failed");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCreateBanner = (values: any) => {
    try {
      createBanner(values);
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
        Add Banner
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}>
        <Form
          onFinish={handleCreateBanner}
          form={form}
          layout="vertical"
          requiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="image"
                label="Banner Image"
                rules={[{ required: true, message: "Please select banner image" }]}>
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
