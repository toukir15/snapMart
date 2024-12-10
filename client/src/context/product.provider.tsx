"use client";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the context values
export interface IProductProviderValues {
  productStates: {
    selectedProductPreview: string;
    setSelectedProductPreview: Dispatch<SetStateAction<string>>;
    brand: string;
    setBrand: Dispatch<SetStateAction<string>>;
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
  };
}

// Create the context
export const ProductContext = createContext<IProductProviderValues | undefined>(
  undefined
);

// Define the provider component
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProductPreview, setSelectedProductPreview] =
    useState<string>("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <ProductContext.Provider
      value={{
        productStates: {
          selectedProductPreview,
          setSelectedProductPreview,
          brand,
          setBrand,
          category,
          setCategory,
          searchTerm,
          setSearchTerm,
        },
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
