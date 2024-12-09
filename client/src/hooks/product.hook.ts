import { useQuery } from "@tanstack/react-query";
import { getFlashSaleProducts } from "../services/product/query";
import { getProducts } from "../services/product/serverQuery";
import { IProductsProps } from "../types/api/product";

export const useGetProducts = ({ brand, category }: IProductsProps) => {
  console.log({ brand, category });
  return useQuery({
    queryKey: ["PRODUCTS", brand, category],
    queryFn: () => getProducts({ brand, category }),
  });
};

export const useGetFlashSaleProducts = () => {
  return useQuery({
    queryKey: ["FLASH_SALE"],
    queryFn: () => getFlashSaleProducts(),
  });
};
