import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getCartItems = async (payload: Partial<User>) => {
  const customerData = await prisma.customer.findUnique({
    where: {
      email: payload.email,
    },
  });
  console.log(customerData);
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

export const CartItemServices = {
  getCartItems,
};
