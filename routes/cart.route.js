// routes/cart.route.js
import express from "express";
import {
  createNewCartCtr,
  getCartCtr,
  deleteCartCtr,
} from "../controllers/cart.controller.js";
import authenticateJWT from "../middleware/auth.middleware.js"; // Assuming you have a middleware for authentication

const router = express.Router();

// router.use(authenticateJWT); // Protect all routes with authentication

router.route("/").post(createNewCartCtr); // Create a new cart

router.route("/:id").get(getCartCtr).delete(deleteCartCtr); // Retrieve the user's cart
export default router;
