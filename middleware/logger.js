//middleware

// const morgan = require("morgan");
//just an example , we will suse http logger Morgan
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

// const morganLogger = (req, res, next) => {
//   morgan("dev");
// };

module.exports = logger;
