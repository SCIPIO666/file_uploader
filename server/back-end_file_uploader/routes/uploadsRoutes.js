// routes/file.routes.js
const express = require("express");
const router = express.Router();

const { uploadFile } = require("../controllers/uploadController");
const { authenticate } = require("../middleware/auth.middleware");
const { upload } = require("../middleware/file.middleware");

router.post(
  "/upload",
  authenticate,
  upload.single("file"),
  uploadFile
);

module.exports = router;