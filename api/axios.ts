import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com",
  timeout: 10000,
});

// future-ready for auth
axiosInstance.interceptors.request.use((config) => {
  return config;
});
