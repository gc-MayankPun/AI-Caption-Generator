const rateLimit = require("express-rate-limit");
const { WINDOW_MS, RATE_LIMIT } = require("./constants");

const limiter = rateLimit({
  windowMs: WINDOW_MS, 
  max: RATE_LIMIT,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Too many requests, please try again later.",
    });
  },
});

module.exports = limiter;
