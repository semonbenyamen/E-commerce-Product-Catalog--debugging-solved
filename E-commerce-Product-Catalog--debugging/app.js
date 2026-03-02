require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Bug: express.urlencoded() missing configuration
// Fix: Added { extended: true }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Bug: Using .then() and not stopping app if DB fails
// Fix: Refactored to async/await with proper error handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Connection Failed", err);
    process.exit(1); // stop server if DB fails
  }
};

connectDB();

app.use("/api/products", productRoutes);

// Bug: Port was hardcoded
// Fix: Using environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server Running"));

