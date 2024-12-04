import { Request } from "express";
import { IFile } from "../../interfaces/file";
import prisma from "../../../shared/prisma";

const createProduct = async (req: Request) => {
  const files = req.files as IFile[];
  const productImages = files.map((file) => file.path);

  const shopId = req.body.shopId;
  const categoryId = req.body.categoryId;

  // Check if the vendor already has a shop
  const existingProduct = await prisma.product.findFirst({
    where: {
      shopId: shopId,
      categoryId: categoryId,
    },
  });

  if (existingProduct) {
    throw new Error("Vendor already add this product");
  }

  const productData = {
    ...req.body,
    images: productImages,
  };

  const result = await prisma.product.create({
    data: productData,
  });
  return result;
};

export const ProductService = {
  createProduct,
};
