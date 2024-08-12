import { Cart } from "../entites/cart.entity.js";

async function createCart(cartData) {
  try {
    return await Cart.create(cartData).go();
  } catch (error) {
    console.error("Error creating cart in service:", error);
    throw new Error("Failed to create cart: " + error.message);
  }
}

async function getCartByUserId(userId) {
  try {
    return await Cart.get({ userId }).go();
  } catch (error) {
    console.error("Error retrieving cart in service:", error);
    throw new Error("Failed to retrieve cart: " + error.message);
  }
}

async function deleteCart(userId) {
  try {
    return await Cart.delete({ userId }).go();
  } catch (error) {
    console.error("Error deleting cart in service:", error);
    throw new Error("Failed to delete cart: " + error.message);
  }
}

export { createCart, getCartByUserId, deleteCart };

// async function createCart(cartData) {
//   return await Cart.create(cartData).go();
// }

// async function getCartByUserId(userId) {
//   return await Cart.get({ userId }).go();
// }

// async function deleteCart(userId) {
//   return Cart.delete({ userId }).go();
// }

// export { createCart, getCartByUserId, deleteCart };
