import {
  createCart,
  getCartByUserId,
  deleteCart,
} from "../services/cart.service.js";

async function createNewCartCtr(req, res) {
  const data = req.body;
  const { userId, productId, quantity, price } = data;

  if (!userId || !productId || !quantity || !price) {
    return res.status(400).json({
      msg: "All fields (userId, productId, quantity, price) are required.",
    });
  }
  if (typeof quantity !== "number" || quantity <= 0) {
    return res.status(400).json({ msg: "Quantity must be a positive number." });
  }
  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({ msg: "Price must be a positive number." });
  }

  const totalPrice = quantity * price;
  const cartData = {
    userId,
    products: [{ productId, quantity }],
    totalPrice,
  };

  try {
    const newCart = await createCart(cartData);
    res
      .status(201)
      .json({ msg: "Cart created successfully", cart: newCart.data });
  } catch (error) {
    console.error("Error adding cart:", error);
    res.status(500).json({ msg: "Error adding cart", error: error.message });
  }
}
async function getCartCtr(req, res) {
  const userId = req.params.id;
  const cart = await getCartByUserId(userId);
  if (cart.data) {
    res.send(cart.data);
  } else {
    res.status(404).send({ msg: "Cart not founded" });
  }
}

async function deleteCartCtr(req, res) {
  const userId = req.params.id;

  const deletedCart = await deleteCart(userId);
  if (deletedCart.data) {
    res.send({ msg: "Cart deleted ", deletedCart: deletedCart.data });
  } else {
    res.status(404).send(`Cart didn't exist for the UserId ${userId} `);
  }
}

export { createNewCartCtr, getCartCtr, deleteCartCtr };
