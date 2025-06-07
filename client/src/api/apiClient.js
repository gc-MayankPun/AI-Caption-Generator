import axios from "axios";

export const apiClient = async (endpoint, method = "POST", data = null) => {
  try {
    const url = `${import.meta.env.VITE_SERVER_URL}${
      import.meta.env.VITE_API_VERSION
    }${endpoint}`;

    const config = {
      method,
      url,
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
