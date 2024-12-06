import { Cart, CartItem } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCart = async (payload: { cart: Cart; cartItem: CartItem }) => {
  const { customerId, shopId } = payload.cart;
  // Check if a cart already exists for the customer and shop
  const existingCart = await prisma.cart.findFirst({
    where: {
      shopId,
      customerId,
    },
  });

  // Initialize result as the existing cart or create a new one if not found
  let result: Cart;
  if (existingCart) {
    result = existingCart;
  } else {
    result = await prisma.cart.create({
      data: payload.cart,
    });
  }

  const returnItem = {
    productId: payload.cartItem.productId,
    quantity: payload.cartItem.quantity,
    cartId: result.id, // Safely use result.id since it's always assigned
  };

  // Check if the cart item already exists
  const existingCartItem = await prisma.cartItem.findFirst({
    where: {
      productId: returnItem.productId,
      cartId: returnItem.cartId,
    },
  });

  if (existingCartItem) {
    // Update the quantity of the existing cart item
    await prisma.cartItem.update({
      where: { id: existingCartItem.id },
      data: { quantity: existingCartItem.quantity + returnItem.quantity },
    });
  } else {
    // Create a new cart item
    await prisma.cartItem.create({
      data: returnItem,
    });
  }

  return result; // Safely return the cart object
};

export const CartServices = {
  createCart,
};
