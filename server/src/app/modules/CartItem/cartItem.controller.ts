import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CartItemServices } from "./cartItem.service";

const getCartItems = catchAsync(async (req: Request, res: Response) => {
  const result = await CartItemServices.getCartItems(req.user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrive cart items successfully",
    data: result,
  });
});

export const CartItemControllers = {
  getCartItems,
};
