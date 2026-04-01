const multer = require("multer");
const crypto = require("crypto");
const { FILE_SIZE_LIMIT } = require("./constants");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: FILE_SIZE_LIMIT
  },
});

const generateFileName = (originalName) => {
  const bytes = crypto.randomBytes(12).toString("hex");
  const ext = originalName.split(".").pop();
  return `${bytes}__-__${Date.now()}__-__${ext}`;
};

module.exports = { upload, generateFileName };
