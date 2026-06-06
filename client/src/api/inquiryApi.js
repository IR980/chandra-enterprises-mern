import axios from "axios";
import API from "../api/axios";
// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

export const submitInquiry = async (
  inquiryData
) => {

  const response = await API.post(
    "/inquiries",
    inquiryData
  );

  return response.data;
};
