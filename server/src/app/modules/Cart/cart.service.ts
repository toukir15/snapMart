import prisma from "../../../shared/prisma";
import { ICart } from "./cart.interface";

const createCart = async (payload: ICart) => {
  const customerId = payload.customerId;
  const shopId = payload.shopId;

  // Check if the vendor already has a shop
  const existingCart = await prisma.cart.findFirst({
    where: {
      shopId: shopId,
      customerId: customerId,
    },
  });

  if (existingCart) {
    throw new Error("Cart already exist!");
  }
  const result = await prisma.cart.create({
    data: payload,
  });
  return result;
};

export const CartServices = {
  createCart,
};
