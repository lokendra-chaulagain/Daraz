import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
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
    console.log(values);
    const formData = new FormData();
    formData.append("author", values.author);
    formData.append("activeStatus", values.activeStatus);
    formData.append("image", values.image);

    try {
      createBanner(formData);
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
                rules={[{ required: true, message: "Required Field" }]}>
                <Input
                  // value={images}
                  type="file"
                  // onChange={onChange}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="activeStatus"
                label="Active Status">
                <Select
                  defaultValue="inActive"
                  options={[
                    { value: "active", label: "Active" },
                    { value: "inActive", label: "InActive" },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="author"
                label="Author">
                <Input />
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
