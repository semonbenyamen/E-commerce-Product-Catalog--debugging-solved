const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
// Bug: price was previously String
// Fix: Changed to Number for proper calculations
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    default: "General",
  },
// Bug: No timestamps for tracking
// Fix: Added timestamps option
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);
