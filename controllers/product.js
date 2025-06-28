const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  const myProducts = await Product.find(queryObject);
  res.status(200).json({ myProducts });
};

const getTest = async (req, res) => {
  res.status(200).json({ message: "Get testing route" });
};

module.exports = { getAllProducts, getTest };
