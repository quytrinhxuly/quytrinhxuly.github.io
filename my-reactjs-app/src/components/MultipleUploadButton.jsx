import React, { useEffect, useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { env } from "../env";
import authServices from "../services/authServices";

const MultipleUploadButton = (props) => {
  const { onChange, returnField = "fileUrl" } = props;
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log(files);
    if (files && files.length > 0) {
      const fileUrls = files?.map((i) => i[returnField])?.join(",");
      onChange && onChange(fileUrls);
    } else {
      onChange && onChange([]);
    }
  }, [files]);

  const handleChange = async (info) => {
    if (info.file.status === "removed") {
      setFiles((prevFiles) =>
        prevFiles.filter((file) => file.uid !== info.file.uid)
      );
    }

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const customRequest = async ({ file, onSuccess, onError }) => {
    try {
      const url = env.APP_SCRIPT_API_HOST + "/exec?endpoint=upload";
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
              authToken: authServices.getToken(),
              fileName: file.name,
              mimeType: file.type,
              content: [...new Int8Array(e.target.result)],
            }),
          });
          if (!response.ok) {
            onError("Upload failed");
            return;
          }
          const result = await response.json();
          const { success, message, data } = result;
          if (success) {
            onSuccess(message);
            files.push({ ...data, uid: file.uid });
            setFiles([...files]);
          } else {
            onError(message);
          }
          console.log(data);
        } catch (error) {
          console.error("Error uploading file:", error);
          onError(error);
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      onError(error);
    }
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Chỉ cho phép tải lên hình ảnh!");
    }

    return isImage;
  };

  return (
    <div style={{ padding: 20 }}>
      <Upload
        accept="image/*"
        listType="picture"
        beforeUpload={beforeUpload}
        customRequest={customRequest}
        onChange={handleChange}
        showUploadList={true}
        multiple
      >
        <Button icon={<UploadOutlined />}>Chọn file</Button>
      </Upload>
    </div>
  );
};

export default MultipleUploadButton;
