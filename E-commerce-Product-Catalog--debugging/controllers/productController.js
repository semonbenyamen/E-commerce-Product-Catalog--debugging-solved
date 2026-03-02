const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
     const { name, price } = req.body;

    // Bug: Missing validation and no return after error
    // Fix: Added validation with early return
 if (!name || !price) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const product = await createProductService({ name, price });

    return res.status(201).json({
      msg: "Product created successfully",
      data: product,
    });

  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    // Bug: limit was string
    // Fix: Converted to number using parseInt
    const limit = parseInt(req.query.limit) || 10;

    const products = await Product.find().limit(limit);
    return res.status(200).json({
      msg: "Products fetched successfully",
      data: products,
    });

  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await deleteProductService(id);

    if (!deletedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    return res.status(200).json({ msg: "Product deleted successfully" });

  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
};

module.exports = { createProduct, getAllProducts };
