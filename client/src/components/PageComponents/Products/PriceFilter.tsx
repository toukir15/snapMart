"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
    <div className="mb-4">
      {/* Header */}
      <div className="flex justify-between items-center cursor-pointer p-2 bg-gray-100 rounded">
        <span className="text-gray-700 font-medium">Price</span>
      </div>

      {/* Price Range */}
      <div className="mt-2 pl-2">
        <div className="flex items-center space-x-2">
          <input
            type="number"
            className="w-full p-2 border rounded text-sm"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <span>-</span>
          <input
            type="number"
            className="w-full p-2 border rounded text-sm"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <Button
          size="sm"
          className="mt-2 w-full bg-[#F85606] text-white py-1 rounded "
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
