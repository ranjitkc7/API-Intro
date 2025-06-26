require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");

const jsonProducts = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(jsonProducts);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

start();
