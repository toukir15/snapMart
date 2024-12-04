import express from "express";
import { CategoryController } from "./category.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post("/", auth(UserRole.ADMIN), CategoryController.createCategory);
router.patch(
  "/:categoryId",
  auth(UserRole.ADMIN),
  CategoryController.editCategory
);
router.delete(
  "/:categoryId",
  auth(UserRole.ADMIN),
  CategoryController.deleteCategory
);

export const CategoryRoutes = router;
