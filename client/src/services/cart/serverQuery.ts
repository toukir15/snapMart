"use server";
import axiosInstance from "@/src/lib/axiosInstance";

export const createPayment = async () => {
  try {
    const { data } = await axiosInstance.post(`/payments/create-payment`);
    return { data };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCart = async () => {
  try {
    const { data } = await axiosInstance.get(`/cart`);
    return { data };
  } catch (error) {
    throw error;
  }
};
