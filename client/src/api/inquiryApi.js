import axios from "axios";
import API from "../api/axios";
// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

export const submitInquiry = async (inquiryData) => {
  const response = await API.post("/inquiries",inquiryData);
  return response.data;
};

export const getRecentInquiries = async () => {
  const response = await API.get("/inquiries/recent");
  return response.data;
};


// Get all inquiries
export const getAllInquiries = async () => {
  const response = await API.get("/inquiries");
  return response.data;
};

// Get single inquiry
export const getInquiryById = async (id) => {
  const response = await API.get(`/inquiries/${id}`);
  return response.data;
};
// Update inquiry status
export const updateInquiryStatus = async (id, status) => {
  const response = await API.patch(`/inquiries/${id}/status`, {
    status,
  });

  return response.data;
};

// Delete inquiry
export const deleteInquiry = async (id) => {
  const response = await API.delete(`/inquiries/${id}`);
  return response.data;
};
