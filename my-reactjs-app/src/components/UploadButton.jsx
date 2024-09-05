import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

export default function UploadButton(props) {
  const {
    name = "file",
    action = "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  } = props;

  const uploadProps = {
    name: name,
    action: action,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload {...uploadProps}>
      <Button icon={<UploadOutlined />}>Chọn files</Button>
    </Upload>
  );
}
