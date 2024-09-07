import React from "react";
import { Input } from "antd";

export default function TrimmedInputPassword({ onChange, ...props }) {
  const handleChange = (event) => {
    const trimmedValue = event.target.value.trim();
    onChange(trimmedValue);
  };

  return <Input.Password {...props} onChange={handleChange} />;
}
