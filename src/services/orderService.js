import apiClient from "./apiClient";

// Lấy danh sách đơn hàng
export const getOrders = async () => {
  const response = await apiClient.get("/orders");
  return response.data;
};

// Lấy đơn hàng theo ID
export const getOrderById = async (id) => {
  const response = await apiClient.get(`/orders/${id}`);
  return response.data;
};

// Tạo đơn hàng mới
export const createOrder = async (orderData) => {
  const response = await apiClient.post("/orders", orderData);
  return response.data;
};

// Cập nhật trạng thái đơn hàng
export const updateOrderStatus = async (id, status) => {
  const response = await apiClient.put(`/orders/${id}/status`, { status });
  return response.data;
};
