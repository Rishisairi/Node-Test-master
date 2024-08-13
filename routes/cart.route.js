import express from "express";
import {
  createNewCartCtr,
  getCartCtr,
  deleteCartCtr,
} from "../controllers/cart.controller.js";
import authenticateJWT from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/").post(createNewCartCtr);

router.route("/:id").get(getCartCtr).delete(deleteCartCtr);
export default router;
