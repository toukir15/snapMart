import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../../helpars/multerUpload";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
  "/",
  multerUpload.array("files"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return ProductController.createProduct(req, res, next);
  }
);

export const ProductRoutes = router;
