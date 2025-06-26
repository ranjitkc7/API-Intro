const mongoose = require("mongoose");

const uri =
  "mongodb+srv://ranjitkc292:JHBBmnelfKmVlQ8B@cluster1.nhwq5gq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const connectDB = async () => {
    console.log("Connect Db")
   return mongoose.connect(uri);
};

module.exports = connectDB;
