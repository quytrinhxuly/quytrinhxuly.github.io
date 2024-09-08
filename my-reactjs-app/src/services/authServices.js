// Example usage in a React component or any JavaScript file
import api from "../api/AxiosInstance"; // Import the configured Axios instance
import Cookies from "js-cookie";

const authServices = {
  loginAsync: async (values, callback) => {
    const response = await api.post("exec?endpoint=auth", values);
    const result = response.data;
    const { success, data } = result;
    if (success) {
      const { token, user } = data;
      let loginUser = {
        ...user,
        id: values["username"]
      }
      localStorage.setItem("auth_user", JSON.stringify(loginUser));
      Cookies.set("auth_token", token, { expires: 1 }); // exprired after 1 day
    } else {
      Cookies.remove("auth_token");
      localStorage.removeItem("auth_user");
    }
    callback && callback(success);
  },
  logout: () => {
    Cookies.remove("auth_token");
    localStorage.removeItem("auth_user");
  },
  resetPasswordAsync: async ({ username, email }, callback) => {
    const response = await api.post("exec?endpoint=reset_password", {
      username,
      email,
    });
    const result = response.data;
    const { success } = result;
    callback && callback(success);
  },
  updatePasswordAsync: async ({ resetToken, rePassword }, callback) => {
    const response = await api.post("exec?endpoint=update_password", {
      resetToken,
      password: rePassword,
    });
    const result = response.data;
    const { success, message } = result;
    callback && callback(success, message);
  },
  check: () => {
    const accessToken = Cookies.get("auth_token");
    if (!Boolean(accessToken)) {
      Cookies.remove("auth_token");
      localStorage.removeItem("auth_user");
    }

    return Boolean(accessToken);
  },
  getToken: () => {
    const accessToken = Cookies.get("auth_token");
    if (!Boolean(accessToken)) {
      Cookies.remove("auth_token");
      localStorage.removeItem("auth_user");
    }

    return accessToken;
  },
  getUserSession: () => {
    const user = localStorage.getItem("auth_user");
    return JSON.parse(user);
  },
};

export default authServices;
