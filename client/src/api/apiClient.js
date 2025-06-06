export const apiClient = async (endpoint, method = "GET", data = null) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data && method !== "GET" && method !== "HEAD") {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}${endpoint}`,
      options
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage = errorData?.message || response.statusText;
      throw new Error(errorMessage);
    }

    if (response.status === 204) {
      return null;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
