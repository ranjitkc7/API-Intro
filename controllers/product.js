const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryObject.featured = featured;
  }
  let apiData = Product.find(queryObject).collation({ locale: "en" });
  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  if(select){
   let selectFix = select.split(",").join(" ");
   apiData = apiData.select(selectFix);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1)*limit;
  apiData = apiData.skip(skip).limit(limit);
  console.log(queryObject);
  const myProducts = await apiData;
res.status(200).json({ myProducts , nbHits: myProducts.length });
};

const getTest = async (req, res) => {
  res.status(200).json({ message: "Get testing route" });
};

module.exports = { getAllProducts, getTest };
