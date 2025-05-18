import { saveItem, removeItem, getItem } from "@/services/storageHelpers";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.143.210:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Request interceptor: attach token
api.interceptors.request.use(
  async (config) => {
    const token = getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🛑 Response interceptor: handle 401s, refresh token, etc. (optional)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export default api;
