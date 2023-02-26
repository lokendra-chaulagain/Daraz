import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Space } from "antd";
import { useCreateSearchTagMutation } from "@/redux/api/globalApi";
import toast from "react-hot-toast";

export default function SearchTagAddDrawer() {
  const [createSearchTag] = useCreateSearchTagMutation();
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

  const handleSearchTagCreate = (values: any) => {
    try {
      createSearchTag(values);
      form.resetFields();
      success()
    } catch (error) {
      console.log(error);
      failure()
    }
  };

  return (
    <>
      <Button
        className="d-flex align-items-center"
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}>
        Add Search Tag
      </Button>
      <Drawer
        title="Create New Search Tag"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}>
        <Form
          onFinish={handleSearchTagCreate}
          form={form}
          layout="vertical"
          requiredMark>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Search Tag Name"
              rules={[{ required: true, message: "Please enter search tag" }]}>
              <Input placeholder="New Search Tag" />
            </Form.Item>
          </Col>

          <Col
            span={24}
            className="d-flex justify-content-end">
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
        </Form>
      </Drawer>
    </>
  );
}
