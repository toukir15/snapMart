"use client";
import { useUpdateCartItem } from "@/src/hooks/cartItem.hook";
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

export default function CartActions({ quantity, inventoryCount, productId }) {
  const { mutate: handleCartItemUpdate } = useUpdateCartItem();
  const handleIncrease = (id: string) => {
    handleCartItemUpdate({ type: "increase", id });
  };
  const handleDecrease = (id: string) => {
    handleCartItemUpdate({ type: "decrease", id });
  };
  const handleDelete = (id: string) => {
    handleCartItemUpdate({ type: "delete", id });
  };
  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleDecrease(productId)}
          className="p-2 border rounded-md text-gray-700 hover:text-orange-500"
        >
          <FiMinus />
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => handleIncrease(productId)}
          className="p-2 border rounded-md text-gray-700 hover:text-orange-500"
        >
          <FiPlus />
        </button>
        <button
          className="p-2 text-red-500 hover:text-red-600 transition"
          onClick={() => handleDelete(productId)}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}
