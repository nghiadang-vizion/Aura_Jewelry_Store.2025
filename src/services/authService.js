import apiClient from "./apiClient";

// Đăng ký tài khoản
export const registerUser = async (userData) => {
  const response = await apiClient.post("/auth/register", userData);
  return response.data;
};

// Đăng nhập
export const loginUser = async (credentials) => {
  const response = await apiClient.post("/auth/login", credentials);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token); // Lưu token vào localStorage
  }
  return response.data;
};

// Đăng xuất
export const logoutUser = () => {
  localStorage.removeItem("token");
};
