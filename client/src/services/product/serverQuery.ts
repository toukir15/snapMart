"use server";
import axiosInstance from "@/src/lib/axiosInstance";
import { IProductsProps } from "@/src/types/api/product";

export const createPayment = async () => {
  try {
    const { data } = await axiosInstance.post(`/payments/create-payment`);
    return { data };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProducts = async ({ brand, category }: IProductsProps) => {
  console.log({ brand, category });
  try {
    const { data } = await axiosInstance.get(
      `/product?category=${category}&brand=${brand}`
    );
    return { data };
  } catch (error: any) {
    throw new Error(error);
  }
};
