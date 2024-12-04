import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CartItemServices } from "./cartItem.service";

const createCartItem = catchAsync(async (req: Request, res: Response) => {
  const result = await CartItemServices.createCartItem(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create cart item successfully",
    data: result,
  });
});

export const CartItemControllers = {
  createCartItem,
};
