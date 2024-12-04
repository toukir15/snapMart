import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ProductService } from "./product.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create product successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
};
