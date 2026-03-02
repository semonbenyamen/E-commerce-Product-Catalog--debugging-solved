const express = require("express");
const router = express.Router();
const {createProduct, getAllProducts, deleteProduct} = require("../controllers/productController");

// Bug: Previously wrong HTTP method for create
// Fix: Using POST for create
router.post("/products", createProduct);

// Bug: Route duplication
// Fix: Clean REST structure
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
module.exports = router;
