const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
//load env vars
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/database");
connectDB();
//route files
const bootcamps = require("./routes/bootcamps");

const app = express();

//Body parser
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//mount routers
//connect common routes with different routes
app.use("/api/v1/bootcamps", bootcamps);

//error handler
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

//handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  //close the server
  server.close(() => process.exit(1));
});
