require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const productRouter = require("./routes/product");

const connectDB = require("./db/connect");
app.get("/", (req, res) => {
  res.send("Hello World! My name is Ranjit K.C.");
});
app.use("/api/products", productRouter);
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
