import axios from "axios";
import API from "../api/axios";
// const API = axios.create({
//   baseURL:
//     "http://localhost:5000/api",
// });

export const subscribeEmail =
  async (email) => {
    const response = await API.post("/subscribers",{ email });

    return response.data;
};
