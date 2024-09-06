// Example usage in a React component or any JavaScript file
import api from "../api/AxiosInstance"; // Import the configured Axios instance
import { generateUUID } from "../utils/index";

const authServices = {
  loginAsync: async (values) => {
    console.log("values ", values);
  },
};

export default authServices;
