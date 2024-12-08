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

  return (
    <ProductContext.Provider
      value={{
        productStates: {
          selectedProductPreview,
          setSelectedProductPreview,
        },
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
