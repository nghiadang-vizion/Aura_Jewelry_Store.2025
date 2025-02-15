import apiClient from "./apiClient";

// Lấy danh sách sản phẩm
export const getProducts = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};

// Lấy chi tiết sản phẩm theo ID
export const getProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

// Thêm sản phẩm mới
export const createProduct = async (productData) => {
  const response = await apiClient.post("/products", productData);
  return response.data;
};

// Cập nhật sản phẩm
export const updateProduct = async (id, productData) => {
  const response = await apiClient.put(`/products/${id}`, productData);
  return response.data;
};

// Xóa sản phẩm
export const deleteProduct = async (id) => {
  const response = await apiClient.delete(`/products/${id}`);
  return response.data;
};
