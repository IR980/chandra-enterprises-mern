import axios from "axios";
import API from "../api/axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// Get Gallery
export const getGallery = async () => {
  const response = await API.get("/gallery");
  return response.data;
};

// Existing (optional if used elsewhere)
export const getGalleryImages = async () => {
  const response = await API.get("/gallery");
  return response.data;
};

// Create Gallery Media
export const createGalleryMedia = async (formData) => {
  const response = await API.post("/gallery", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Update Gallery Media
export const updateGalleryMedia = async (id, formData) => {
  const response = await API.put(`/gallery/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Delete Gallery Media
export const deleteGalleryMedia = async (id) => {
  const response = await API.delete(`/gallery/${id}`);
  return response.data;
};