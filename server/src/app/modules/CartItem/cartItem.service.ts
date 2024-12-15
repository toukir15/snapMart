import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getCartItems = async (payload: Partial<User>) => {
  const customerData = await prisma.customer.findUnique({
    where: {
      email: payload.email,
    },
  });
  const findCustomerCart = await prisma.cart.findFirst({
    where: {
      customerId: customerData?.id,
    },
  });

  const result = await prisma.cartItem.findMany({
    where: { cartId: findCustomerCart?.id },
    include: {
      product: {
        select: { name: true, images: true, price: true, inventoryCount: true },
      },
    },
  });
  return result;
};

const updateCartItem = async (payload: { type: string; id: string }) => {
  // Find the cart item by its unique ID
  console.log(payload)
  const findCartItem = await prisma.cartItem.findFirstOrThrow({
    where: {
      id: payload.id,
    },
  });

  let result;

  // Increase or decrease the quantity
  if (payload.type === "increase") {
    result = await prisma.cartItem.update({
      where: {
        id: payload.id,
      },
      data: {
        quantity: findCartItem.quantity + 1,
      },
    });
  } else if (payload.type === "decrease") {
    if (findCartItem.quantity > 1) {
      result = await prisma.cartItem.update({
        where: {
          id: payload.id,
        },
        data: {
          quantity: findCartItem.quantity - 1,
        },
      });
    }
  } else if (payload.type === "delete") {
    result = await prisma.cartItem.delete({
      where: {
        id: payload.id,
      },
    });
  }

  return result;
};

export const CartItemServices = {
  getCartItems,
  updateCartItem,
};
