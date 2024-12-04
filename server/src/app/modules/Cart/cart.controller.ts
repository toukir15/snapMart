import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CartServices } from "./cart.service";

const createCart = catchAsync(async (req: Request, res: Response) => {
  const result = await CartServices.createCart(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create cart successfully",
    data: result,
  });
});

export const CartControllers = {
  createCart,
};
