import express from "express";
import {
  placeOrderCtr,
  getUserOrdersCtr,
} from "../controllers/orders.controller.js";
import authenticateJWT from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", placeOrderCtr);

router.get("/:id", getUserOrdersCtr);

export default router;
