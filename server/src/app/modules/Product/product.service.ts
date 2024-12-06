import { Request } from "express";
import { IFile } from "../../interfaces/file";
import prisma from "../../../shared/prisma";
import { Prisma, Product } from "@prisma/client";
import { paginationHelper } from "../../../helpars/paginationHelper";

const getProducts = async (params: any, options: any) => {
  const andCondition: Prisma.ProductWhereInput[] = [];
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(options);
  // Filter by search term
  if (params.searchTerm) {
    andCondition.push({
      OR: [
        {
          name: {
            contains: params.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  // Filter by price range
  if (params.price) {
    const [minPrice, maxPrice] = params.price.split("-").map(Number);
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      andCondition.push({
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      });
    }
  }

  // Filter by category
  if (params.category) {
    andCondition.push({
      category: {
        name: {
          equals: params.category,
          mode: "insensitive",
        },
      },
    });
  }

  const whereConditions: Prisma.ProductWhereInput = { AND: andCondition };
  const result = await prisma.product.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: { [sortBy]: sortOrder },
    include: {
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const total = await prisma.product.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createProduct = async (req: Request) => {
  const files = req.files as IFile[];
  const productImages = files.map((file) => file.path);

  const shopId = req.body.shopId;
  const name = req.body.name;

  // Check if the vendor already has a shop
  const existingProduct = await prisma.product.findFirst({
    where: {
      shopId: shopId,
      name: name,
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

const updateProduct = async (productId: string, data: Partial<Product>) => {
  await prisma.product.findUniqueOrThrow({
    where: {
      id: productId,
    },
  });

  const result = await prisma.product.update({
    where: {
      id: productId,
    },
    data,
  });

  return result;
};

const deleteProduct = async (productId: string) => {
  await prisma.product.findUniqueOrThrow({
    where: {
      id: productId,
    },
  });

  const result = await prisma.product.delete({
    where: {
      id: productId,
    },
  });

  return result;
};

export const ProductService = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
};
