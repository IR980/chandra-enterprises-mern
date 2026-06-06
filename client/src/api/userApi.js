import axios from "axios";
import API from "../api/axios";
// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

export const updateProfile =async (profileData,token) => {
    const response =await API.put("/users/profile",profileData,{headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };