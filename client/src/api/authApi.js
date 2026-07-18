import API from "../api/axios";

// REGISTER API
export const registerUser = async (userData) => {
  const response = await API.post(
    "/auth/register",
    userData
  );

  return response.data;
};

// LOGIN API
export const loginUser = async (userData) => {
  const response = await API.post(
    "/auth/login",
    userData
  );

  return response.data;
};

// ADMIN LOGIN
// ==============================

export const adminLogin = async (data) => {
  const response = await API.post("/auth/admin-login", data);
  return response.data;
};