// import axios from "axios";
// import API from "../api/axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });


// // REGISTER API
// export const registerUser = async (userData) => {
//   const response = await API.post(
//     "/auth/register",
//     userData
//   );

//   return response.data;
// };


// // LOGIN API
// export const loginUser = async (userData) => {
//   const response = await API.post(
//     "/auth/login",
//     userData
//   );

//   return response.data;
// };



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