const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/config.env" });
const connectDB = async () => {
  console.log("running connectDB ", process.env.MONGO_URI);
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });
  console.log(`MongoDB connected ${conn.connection.host}`);
};

module.exports = connectDB;
