import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
export default function FormTitle(props) {
  const { level = 4, children } = props;

  return <Title className="form-title" level={level}>{children}</Title>;
}
