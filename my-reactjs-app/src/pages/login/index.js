import {
  AlipayOutlined,
  LockOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Divider, Space, Tabs, message, theme } from "antd";
import authServices from "../../services/authServices";
import "./style.css";

const Page = () => {
  const { token } = theme.useToken();
  const handleLogin = (values) => {
    authServices.loginAsync(values);
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
        className="login-form"
        onFinish={handleLogin}
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="ĐĂNG NHẬP"
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0,0.65)",
          backdropFilter: "blur(4px)",
        }}
        submitter={{
          searchConfig: { submitText: "Đăng nhập" },
        }}
      >
        <div
          style={{
            height: 20,
          }}
        ></div>
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: (
              <UserOutlined
                style={{
                  color: token.colorText,
                }}
                className={"prefixIcon"}
              />
            ),
          }}
          placeholder={"Tài khoản"}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: (
              <LockOutlined
                style={{
                  color: token.colorText,
                }}
                className={"prefixIcon"}
              />
            ),
          }}
          placeholder={"Mật khẩu"}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu !",
            },
          ]}
        />

        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            Ghi nhớ tài khoản
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
          >
            Quên mật khẩu
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider dark>
      <Page />
    </ProConfigProvider>
  );
};
