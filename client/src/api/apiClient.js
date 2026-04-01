import axios from "axios";

export const apiClient = async (endpoint, method = "POST", data = null) => {
  try { 
    const config = {
      method,
      url: `${import.meta.env.VITE_API_URL}${endpoint}`,
      data,
      headers: {},
    };

    // Let Axios automatically set the correct Content-Type + boundary
    if (!(data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Request failed";
    throw new Error(message);
  }
};
