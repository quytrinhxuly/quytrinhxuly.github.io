import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import TrimmedInputPassword from "./../../components/TrimmedInputPassword"; // Import the custom input component
import authServices from "../../services/authServices";

const { Title } = Typography;

const ResetPassword = () => {
  const [form] = Form.useForm();
  const [isValidToken, setIsValidToken] = useState(true); // State to check token validity
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const resetToken = queryParams.get("token");

  useEffect(() => {
    // Simulate token validation
    if (!resetToken) {
      setIsValidToken(false);
    } else {
      // Validate token (e.g., make an API call)
      // For simplicity, let's assume the token is valid
      setIsValidToken(true);
    }
  }, [location.search]);

  const handleSubmit = (values) => {
    if (!isValidToken) {
      return;
    }

    const { newPassword, rePassword } = values;
    if (newPassword !== rePassword) {
      form.setFields([
        {
          name: "rePassword",
          errors: ["Mật khẩu không khớp"],
        },
      ]);
      return;
    }

    setIsLoading(true);
    authServices.updatePasswordAsync(
      { resetToken, rePassword },
      (success, _message) => {
        setIsLoading(false);

        if (success) {
          message.success(_message);
          form.resetFields();
        } else {
          message.error(_message);
        }
      }
    );
  };

  if (!isValidToken) {
    return (
      <div style={{ textAlign: "center" }}>
        <Title level={2}>Liên kết đã hết hạn vui lòng kiểm tra lại!</Title>
        <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
      <Title level={2}>Đặt lại mật khẩu</Title>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          label="Mật khẩu"
          name="newPassword"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <TrimmedInputPassword />
        </Form.Item>
        <Form.Item
          label="Xác nhận lại mật khẩu"
          name="rePassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Vui lòng xác nhận lại mật khẩu!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Mật khẩu không khớp");
              },
            }),
          ]}
        >
          <TrimmedInputPassword />
        </Form.Item>
        <Button
          loading={isLoading}
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
            height: "35px",
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          Cập nhật mật khẩu
        </Button>
        <Button
          type="link"
          style={{ width: "100%" }}
          onClick={() => navigate("/login")}
        >
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
