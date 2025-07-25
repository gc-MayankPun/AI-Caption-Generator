const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

// Construct absolute path to 'temp/uploads'
const uploadPath = path.join(__dirname, "..", "temp", "uploads");

// ✅ Ensure the directory exists
fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // Now safe because the folder exists
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      if (err) return cb(err); // handle error
      const fileName =
        bytes.toString("hex") +
        "__-__" +
        file.fieldname +
        "__-__" +
        path.extname(file.originalname);
      cb(null, fileName);
    });
  },
});

const deleteTempFile = async (filePath) => {
  if (!filePath) return;

  try {
    await fsPromises.unlink(filePath);
  } catch (err) {
    console.error("Error deleting file:", err);
  }
};

const upload = multer({ storage: storage });

module.exports = { upload, deleteTempFile };
