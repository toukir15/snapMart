"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const DarazCart = () => {
  const [cart, setCart] = useState([
    {
      vendor: "Jordan Official Store",
      products: [
        { id: 1, name: "Jordan 4 Retro", price: 250, quantity: 1 },
        { id: 2, name: "Jordan 1 Low", price: 200, quantity: 2 },
        { id: 2, name: "Jordan 1 Low", price: 200, quantity: 2 },
        { id: 2, name: "Jordan 1 Low", price: 200, quantity: 2 },
        { id: 2, name: "Jordan 1 Low", price: 200, quantity: 2 },
        { id: 2, name: "Jordan 1 Low", price: 200, quantity: 2 },
        { id: 2, name: "Jordan 1 Low", price: 200, quantity: 2 },
      ],
    },
  ]);

  const calculateVendorTotal = (products) => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const calculateCartTotal = () => {
    return cart.reduce(
      (total, vendor) => total + calculateVendorTotal(vendor.products),
      0
    );
  };

  const updateQuantity = (vendorIndex, productIndex, delta) => {
    const updatedCart = [...cart];
    const product = updatedCart[vendorIndex].products[productIndex];
    product.quantity = Math.max(1, product.quantity + delta); // Ensure quantity >= 1
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-6 mt-[120px]">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Section */}
        <div className="lg:col-span-2">
          {cart.map((vendor, vendorIndex) => (
            <div
              key={vendor.vendor}
              className="border border-gray-200 rounded-lg mb-6"
            >
              <div className="p-4 bg-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-medium">{vendor.vendor}</h2>
                <p className="text-sm text-gray-500">
                  Total: ${calculateVendorTotal(vendor.products)}
                </p>
              </div>

              <div className="p-4">
                {vendor.products.map((product, productIndex) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://via.placeholder.com/80`}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="text-md font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">
                          ${product.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          updateQuantity(vendorIndex, productIndex, -1)
                        }
                        className="p-2 border rounded-md text-gray-700 hover:text-orange-500"
                      >
                        <FiMinus />
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(vendorIndex, productIndex, 1)
                        }
                        className="p-2 border rounded-md text-gray-700 hover:text-orange-500"
                      >
                        <FiPlus />
                      </button>
                      <button className="p-2 text-red-500 hover:text-red-600 transition">
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border border-gray-200 rounded-lg p-4 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${calculateCartTotal()}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Shipping Fee</p>
            <p className="text-gray-700">$10</p>
          </div>
          <div className="flex justify-between font-semibold mb-4">
            <p className="text-gray-900">Total</p>
            <p className="text-[#F85606]">${calculateCartTotal() + 10}</p>
          </div>
          <Button className="w-full bg-[#F85606] text-white py-3 rounded-lg transition">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DarazCart;
