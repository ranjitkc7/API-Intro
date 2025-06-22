const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "Get all products route" });
};

const getTest = async (req, res) => {
  res.status(200).json({ message: "Get testing route" });
};

module.exports = { getAllProducts, getTest };
