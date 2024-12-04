import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { ICategory } from "./category.interface";

const createCategory = async (payload: ICategory) => {
  const result = await prisma.category.create({
    data: payload,
  });
  return result;
};

const editCategory = async (categoryId: string, data: Partial<Category>) => {
  const result = await prisma.category.update({
    where: {
      id: categoryId,
    },
    data,
  });
  return result;
};

const deleteCategory = async (categoryId: string) => {
  const result = await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
  return result;
};

export const CategoryServices = {
  createCategory,
  editCategory,
  deleteCategory,
};
