const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./db");
const Brand = require("./models/brand");
const Product = require("./models/product");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

app.listen(PORT, () => {
  console.log(`Express seerver listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is the root");
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw Error("Could not find product.");
    }
    res.json(product);
  } catch (e) {
    console.log(e);
    res.send();
  }
});

app.get("/brands", async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
});

app.get("/brands/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    if (!brand) {
      throw Error("Could not find brand.");
    }
    res.json(brand);
  } catch (e) {
    console.log(e);
    res.send();
  }
});

/* HTTP request is sent to the http://localhost:3000/
call the handler function */
