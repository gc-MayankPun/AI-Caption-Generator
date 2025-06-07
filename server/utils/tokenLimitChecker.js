const { encode } = require("gpt-3-encoder");
const { MAX_TOKENS } = require("./constants");

const tokenLimitChecker = (message) => {
  if (!message || typeof message !== "string") return false;
  const tokenCount = encode(message).length;
  return tokenCount <= MAX_TOKENS;
};

module.exports = tokenLimitChecker;
