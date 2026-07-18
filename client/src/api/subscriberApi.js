import axios from "axios";
import API from "../api/axios";
// const API = axios.create({
//   baseURL:
//     "http://localhost:5000/api",
// });

export const subscribeEmail = async (email) => {
  const response = await API.post("/subscribers", { email });

  return response.data;
};

// admin routes
// Get All Subscribers
export const getSubscribers = async () => {
  const response = await API.get("/subscribers");
  return response.data;
};

// Delete Subscriber
export const deleteSubscriber = async (id) => {
  const response = await API.delete(`/subscribers/${id}`);
  return response.data;
};