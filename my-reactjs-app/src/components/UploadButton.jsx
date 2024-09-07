import React, { useEffect, useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { env } from "../env";
import authServices from "../services/authServices";

// returnField: filename | fileUrl | fileId
const UploadButton = (props) => {
  const { onChange, returnField = "fileUrl", multiple } = props;
  const [selectedFile, setSelectedFile] = useState("");
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (multiple) {
      if (returnField) {
        const output = files.map((f) => f[returnField]).join(",");
        onChange && onChange(output);
      } else {
        onChange && onChange(files);
      }
    } else {
      if (returnField) {
        onChange && onChange(selectedFile[returnField]);
      } else {
        onChange && onChange(selectedFile);
      }
    }
  }, [selectedFile]);

  const handleChange = async (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const customRequest = async ({ file, onSuccess, onError }) => {
    setIsLoading(true);
    const url = env.APP_SCRIPT_API_HOST + "/exec?endpoint=upload";
    try {
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
            setIsLoading(false);

            return;
          }

          const result = await response.json();
          const { success, message, data } = result;
          if (success) {
            onSuccess(message);
            setSelectedFile(data);
            setFiles([...files, data]);
          } else {
            onError(message);
          }

          console.log(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error uploading file:", error);
          onError(error);
          setIsLoading(false);
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      onError(error);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Upload
        customRequest={customRequest}
        onChange={handleChange}
        showUploadList={false}
      >
        {!Boolean(multiple) && selectedFile && <p>{selectedFile.filename}</p>}

        {Boolean(multiple) && (
          <div>
            {files.map((f) => (
              <p>{f["filename"]}</p>
            ))}
          </div>
        )}

        {(Boolean(multiple) || !Boolean(selectedFile)) && (
          <Button loading={isLoading} icon={<UploadOutlined />}>
            Chọn file
          </Button>
        )}
      </Upload>
    </div>
  );
};

export default UploadButton;
