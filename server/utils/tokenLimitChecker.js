const { encode } = require("gpt-3-encoder");

const tokenLimitChecker = (message, maxTokens = 200) => {
  if (!message || typeof message !== "string") return false;
  const tokenCount = encode(message).length;
  return tokenCount <= maxTokens;
};

module.exports = tokenLimitChecker