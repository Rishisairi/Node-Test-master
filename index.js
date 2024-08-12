// const express = require("express");
import express from "express";
import cors from "cors";
import products from "./routes/products.route.js";
import cartRouter from "./routes/cart.route.js";
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/products", products);
app.use("/cart", cartRouter);

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
