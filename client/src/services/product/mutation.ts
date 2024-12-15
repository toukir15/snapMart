"use server";
import axiosInstance from "@/src/lib/axiosInstance";

export const createProduct = async (productData: any) => {
    try {
        const { data } = await axiosInstance.post(`/product`, productData);
        return { data };
    } catch (error: any) {
        console.log(error)
        throw new Error(error);
    }
};
