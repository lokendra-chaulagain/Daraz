import React from "react";
import { Button, Result } from "antd";

export default function SomethingWentWrong() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
}
