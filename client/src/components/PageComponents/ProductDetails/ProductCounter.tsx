"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

export default function ProductCounter() {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <div className="flex mt-4 lg:mt-12 gap-4 lg:gap-6">
        <div className="flex gap-4 border py-2 lg:py-2 justify-between px-4 lg:w-[19%] text-xl ">
          <button
            disabled={counter <= 1}
            onClick={() => setCounter(counter - 1)}
            className={`${
              counter <= 1
                ? "text-orange-200"
                : "text-orange-500 hover:text-orange-600"
            }  transition duration-100 pr-1`}
          >
            <FiMinus />
          </button>
          <p>{counter}</p>
          <button
            disabled={counter == 10 || 10 - counter === 0}
            onClick={() => setCounter(counter + 1)}
            className={` ${
              counter == 10 || 10 - counter === 0
                ? "text-orange-200"
                : "text-orange-500 hover:text-orange-600"
            }  transition duration-100 pl-1`}
          >
            <GoPlus />
          </button>
        </div>
        <Button
          size="lg"
          radius="none"
          // onClick={() => handleAddToCart(productData?.data._id)}
          className="px-4 w-[50%] bg-orange-500 transition duration-150 text-black font-medium flex justify-center items-center"
          //   disabled={!selectedSize}s
        >
          Add to Cart
        </Button>
      </div>
      {/* {!selectedSize && (
        <p className="mt-2 text-sm text-red-500">Please select a size</p>
      )} */}
    </div>
  );
}
