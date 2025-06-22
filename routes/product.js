const express = require("express");
const router = express.Router();
const {getAllProducts, getTest} = require("../controllers/product");

router.route("/").get(getAllProducts);
router.route("/test").get(getTest);

module.exports = router;