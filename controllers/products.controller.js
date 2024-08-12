import {
  deleteProduct,
  updateProduct,
  CreateNewProduct,
  getProducts,
  getProductById,
} from "../services/products.service.js";
import { v4 as uuidv4 } from "uuid";
import { Products } from "../entites/products.entity.js";

async function getAllProducts(request, response) {
  try {
    const allProducts = await getProducts();
    response.send(allProducts.data);
  } catch (err) {
    response.status(500).send({ msg: "Unable to get Products" });
  }
}

async function getallProductById(request, response) {
  try {
    const { productId } = request.params;
    const product = await getProductById(productId);
    response.send(product.data);
  } catch (err) {
    response.status(400).send({ msg: "Unable to retrive the product by Id" });
  }
}

async function CreateNewProductData(req, res) {
  try {
    const data = req.body;

    const addProduct = {
      ...data,
      productId: uuidv4(),
    };
    // console.log(addProduct);

    await CreateNewProduct(addProduct);
    // console.log(data);
    res.send(addProduct);
  } catch (err) {
    res.send({ msg: "Failed to Add the product", err });
  }
}

async function updateProductData(request, response) {
  const { productId } = request.params;
  const updateData = request.body;
  const existing = await Products.get({ productId }).go();

  try {
    const final = await updateProduct(existing, updateData);
    console.log(final.data);
    response.send(final.data);
  } catch (err) {
    response.send({ msg: "Failed to Update the Product" });
  }
}

async function deleteProductData(request, response) {
  const { productId } = request.params;
  // await Movies.get({ productId }).go();
  getProductById(productId);

  try {
    await deleteProduct(productId);
    response.send("Product deleted 🎉");
  } catch (err) {
    response.status(404).send("No such Product 🥲");
  }
}

export {
  getAllProducts,
  getallProductById,
  CreateNewProductData,
  updateProductData,
  deleteProductData,
};
