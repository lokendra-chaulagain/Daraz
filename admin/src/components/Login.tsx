import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center px-3 "
      style={{ height: "100vh", marginTop: "-10%" }}>
      <Form
        style={{ width: "350px" }}
        name="normal_login"
        className="login-form  "
        initialValues={{ remember: true }}
        onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon py-2" />}
            placeholder="Email Address"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon py-2" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between mb-2 ">
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            className="login-form-forgot"
            href="">
            Forgot password
          </a>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-100 my-2">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
