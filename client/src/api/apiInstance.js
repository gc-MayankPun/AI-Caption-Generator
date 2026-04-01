import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const apiClient = async (endpoint, method = "POST", data = null) => {
  try {
    const config = {
      method,
      url: endpoint,
      data,
    };

    if (!(data instanceof FormData)) {
      config.headers = {
        "Content-Type": "application/json",
      };
    }

    const response = await api(config);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Request failed";

    throw new Error(message);
  }
};
