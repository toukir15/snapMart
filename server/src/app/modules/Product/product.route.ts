import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../../helpars/multerUpload";
import { ProductController } from "./product.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.VENDOR),
  multerUpload.array("files"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return ProductController.createProduct(req, res, next);
  }
);

router.get(
  "/",
  auth(UserRole.VENDOR, UserRole.ADMIN, UserRole.CUSTOMER),
  ProductController.getProducts
);

router.patch(
  "/:productId",
  auth(UserRole.VENDOR),
  ProductController.updateProduct
);
router.delete(
  "/:productId",
  auth(UserRole.VENDOR),
  ProductController.deleteProduct
);

export const ProductRoutes = router;
