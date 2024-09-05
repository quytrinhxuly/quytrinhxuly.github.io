// Example usage in a React component or any JavaScript file
import api from "../api/AxiosInstance"; // Import the configured Axios instance

const fileServices = {
  fetchData: async () => {
    try {
      const response = await api.get("/endpoint"); // Replace '/endpoint' with your API endpoint
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },
};

export default fileServices;
