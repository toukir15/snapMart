import { useQuery } from "@tanstack/react-query";
import { getFlashSaleProducts, getProducts } from "../services/product/query";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["PRODUCT"],
    queryFn: () => getProducts(),
  });
};

export const useGetFlashSaleProducts = () => {
  return useQuery({
    queryKey: ["FLASH_SALE"],
    queryFn: () => getFlashSaleProducts(),
  });
};
