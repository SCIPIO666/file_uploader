// file.routes.js
import express from "express";
const  uploadFile = require("../controllers/uploadController") ;
const  upload =require("../middleware/uploadMiddleware");
const router = express.Router();

router.post(
  "/",
  // next cal/ auth before upload call to inject re.user
  upload.single("file"), // ✅ req.file injected
  uploadFile
);

export default router;