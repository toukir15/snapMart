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
    config.headers.Authorization =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MzM2MzkxOTgsImV4cCI6MTczNDI0Mzk5OH0.tzoS5hekFmSF7vOmZBOVVaS8l3xIimMLUByw06H5HI4";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
