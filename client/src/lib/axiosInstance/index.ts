import axios from "axios";
import { cookies } from "next/headers";

// Create the Axios instance
const axiosInstance = axios.create({
  // baseURL: `${envConfig.baseApi}`,
  baseURL: `http://localhost:5000/api/v1`,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = cookies().get("accessToken")?.value;
    config.headers.Authorization = accessToken;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
