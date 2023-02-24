import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useCreateCategoryMutation } from "@/redux/api/globalApi";

export default function CategoryAddDrawer() {
  const [createCategory] = useCreateCategoryMutation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCreateCategory = (values: any) => {
    try {
      createCategory(values);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        className="d-flex align-items-center"
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}>
        Add Category
      </Button>
      <Drawer
        title="Create new category"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}>
        <Form
          onFinish={handleCreateCategory}
          form={form}
          layout="vertical"
          requiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Category Name"
                rules={[{ required: true, message: "Category Name" }]}>
                <Input placeholder="Please enter category name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="image"
                label="Category Image"
                rules={[{ required: true, message: "Category Image" }]}>
                <Input
                  type="file"
                  placeholder="Please enter category image"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter description",
                  },
                ]}>
                <Input.TextArea
                  rows={4}
                  placeholder="Description"
                />
              </Form.Item>
            </Col>
          </Row>
          <Space>
            <Form.Item>
              <Button onClick={onClose}>Cancel</Button>
            </Form.Item>
            <Form.Item>
              <Button
                // onClick={onClose}
                htmlType="submit"
                type="primary">
                Submit
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </Drawer>
    </div>
  );
}
