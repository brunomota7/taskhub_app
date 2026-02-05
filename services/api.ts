import axios from "axios";
import { getAuthToken } from "./authToken";

export const api = axios.create({
  baseURL: "http://192.168.100.141:8080",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();

  const isPublicRoute =
    config.url?.includes("/auth/login") ||
    config.url?.includes("/auth/signup");

  if (token && !isPublicRoute) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
