const express = require("express");
const router = express.Router();
const {createProduct, getAllProducts} = require("../controllers/productController");

router.post("/products", createProduct);
router.get("/products/all", getAllProducts);

module.exports = router;
