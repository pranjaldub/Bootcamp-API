const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
//load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
