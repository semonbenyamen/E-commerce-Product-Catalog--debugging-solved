const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
     const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ msg: "Missing Data" });
  }
 
  const Product = await Priduct.create({ name, price });
    return res.status(201).json({ msg: "Product Created", data: product });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;

    const products = await Product.find().limit(limit);
    res.status(200).json({ msg: "Products fetched", data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createProduct, getAllProducts };
