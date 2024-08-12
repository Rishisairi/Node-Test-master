import express, { response } from "express";

import {
  CreateNewProductData,
  deleteProductData,
  getAllProducts,
  getallProductById,
  updateProductData,
} from "../controllers/products.controller.js";

const router = express.Router();

router.route("/").get(getAllProducts).post(CreateNewProductData);

router
  .route("/:productId")
  .get(getallProductById)
  .put(updateProductData)
  .delete(deleteProductData);

// router.post("", CreateNewMovieData);
// router.delete("/:movieId", deleteMovieData);

export default router;
