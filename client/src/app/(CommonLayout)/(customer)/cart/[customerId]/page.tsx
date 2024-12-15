"use client";
import { CartHeader } from "@/src/components/PageComponents/Cart/CartHeader";
import { CartItem } from "@/src/components/PageComponents/Cart/CartItem";
import { OrderSummary } from "@/src/components/PageComponents/Cart/OrderSummery";
import { useGetCart } from "@/src/hooks/cart.hook";
import { IProduct } from "@/src/types/product";
import React from "react";

const CartPage = () => {
  const { data } = useGetCart();
  const cartData = data?.data.data
  const totalPrice = cartData?.cartItems?.reduce(
    (acc: number, item: any) => acc + item.product.price * item.quantity,
    0
  );
  // const cartNumber = data.cartItems.reduce(
  //   (acc: number, item: any) => acc + item.quantity,
  //   0
  // );


  return (
    <div className="container mx-auto p-6 mt-[120px]">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border border-gray-200 rounded-lg mb-6">
            <CartHeader shopName={cartData?.shop?.name} totalPrice={totalPrice} />
            <div className="p-4">
              {cartData?.cartItems?.map((product: IProduct) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <OrderSummary
          subtotal={totalPrice}
          shippingFee={80}
          total={totalPrice + 80}
        />
      </div>
    </div>
  );
};

export default CartPage;
