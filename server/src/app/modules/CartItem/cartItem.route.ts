import express from "express";
import { CartItemControllers } from "./cartItem.controller";

const router = express.Router();

router.post("/", CartItemControllers.createCartItem);

export const CartItemRoutes = router;
