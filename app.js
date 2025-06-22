const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const productRouter = require("./routes/product");
app.get("/", (req, res) => {
  res.send("Hello World! My name is Ranjit K.C.");
});
app.use("/api/products", productRouter);
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
