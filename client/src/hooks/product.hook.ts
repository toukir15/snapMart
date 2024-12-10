import { useQuery } from "@tanstack/react-query";
import { getFlashSaleProducts } from "../services/product/query";
import { getProducts } from "../services/product/serverQuery";
import { IProductsProps } from "../types/api/product";

export const useGetProducts = ({
  brand,
  category,
  searchTerm,
}: IProductsProps) => {
  return useQuery({
    queryKey: ["PRODUCTS", brand, category, searchTerm],
    queryFn: () => getProducts({ brand, category, searchTerm }),
  });
};

export const useGetFlashSaleProducts = () => {
  return useQuery({
    queryKey: ["FLASH_SALE"],
    queryFn: () => getFlashSaleProducts(),
  });
};
