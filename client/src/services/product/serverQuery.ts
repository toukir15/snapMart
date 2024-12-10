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

export const getProducts = async ({
  brand,
  category,
  searchTerm,
}: IProductsProps) => {
  console.log({ brand, category, searchTerm });
  try {
    const { data } = await axiosInstance.get(
      `/product?category=${category}&brand=${brand}&searchTerm=${searchTerm}`
    );
    return { data };
  } catch (error: any) {
    throw new Error(error);
  }
};
