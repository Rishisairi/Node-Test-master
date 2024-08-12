import { Products } from "../entites/products.entity.js";

async function deleteProduct(productId) {
  return await Products.delete({ productId }).go();
}

async function updateProduct(existing, updateData) {
  return await Products.put({ ...existing.data, ...updateData }).go();
}

async function CreateNewProduct(addProduct) {
  //   console.log(addProduct);
  return await Products.create(addProduct).go();
}

async function getProductById(productId) {
  return await Products.get({ productId }).go();
}

async function getProducts() {
  return await Products.scan.go();
}

export {
  deleteProduct,
  updateProduct,
  CreateNewProduct,
  getProducts,
  getProductById,
};
