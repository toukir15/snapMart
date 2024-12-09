"use client";
import { useContext } from "react";
import { FilterGroup } from "./FilterGroup";
import { PriceFilter } from "./PriceFilter";
import {
  IProductProviderValues,
  ProductContext,
} from "@/src/context/product.provider";
export const ProductSidebar = ({
  categories,
  brands,
}: {
  categories: string[];
  brands: string[];
}) => {
  const { productStates } = useContext(
    ProductContext
  ) as IProductProviderValues;

  const { brand, category, setBrand, setCategory } = productStates;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <FilterGroup
        selectedOption={category}
        setSelectedOption={setCategory}
        title="Category"
        options={categories}
        type="search"
      />
      <FilterGroup
        selectedOption={brand}
        setSelectedOption={setBrand}
        title="Brand"
        options={brands}
        type="search"
      />
      <PriceFilter />
    </div>
  );
};
