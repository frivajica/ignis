import axios from "axios";

import { AxiosErrorResponse } from "@/interfaces/indext";
export const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_BASE_URL,
  },
});

export const initResponseInterceptor = () => {
  http.interceptors.response.use(undefined, async (error: AxiosErrorResponse) => {
    const statusCode = error?.response?.status;

    if (statusCode >= 500) {
      // show server error
    }

    throw await Promise.reject(error);
  });
};
