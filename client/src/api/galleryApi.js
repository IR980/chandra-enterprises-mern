import axios from "axios";
import API from "../api/axios";


// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

export const getGalleryImages =
  async () => {

    const response =
      await API.get("/gallery");

    return response.data;
  };
  