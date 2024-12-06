import { Request } from "express";
import prisma from "../../../shared/prisma";
import { IFile } from "../../interfaces/file";

const getShop = () => {
  console.log("object");
};

const createShop = async (req: Request) => {
  const file = req.file as IFile;

  const vendorId = req.body.vendorId;

  // Check if the vendor already has a shop
  const existingShop = await prisma.shop.findUnique({
    where: {
      vendorId: vendorId,
    },
  });

  if (existingShop) {
    throw new Error("This vendor already has a shop.");
  }

  const shopData = {
    ...req.body,
    logo: file.path,
  };
  const result = await prisma.shop.create({
    data: shopData,
  });
  return result;
};

const blackListShop = async (shopId: string) => {
  const shop = await prisma.shop.findUniqueOrThrow({
    where: {
      id: shopId,
    },
  });

  const result = await prisma.shop.update({
    where: {
      id: shopId,
    },
    data: {
      isActive: !shop.isActive,
    },
  });
  return result;
};

export const ShopServices = {
  createShop,
  blackListShop,
  getShop,
};
