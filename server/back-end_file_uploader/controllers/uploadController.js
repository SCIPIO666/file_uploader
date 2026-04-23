// controllers/file.controller.js
const { uploadSchema } = require("../validators/fileValidator");
const fileService = require("../services/uploadServices");
const logger=require('../utils/logger')

const uploadFile = async (req, res) => {
  try {
    // 1. Validate body
    const data = uploadSchema.parse(req.body);

    // 2. Ensure file exists
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    logger.info(req.file)
    res.end()
    // // 3. Call service
    // const result = await fileService.upload({
    //   file: req.file,
    //   userId: req.user.id,
    //   folderId: data.folderId,
    // });

    // // 4. Respond
    // return res.status(201).json(result);

  } catch (err) {
    return res.status(400).json({
      error: err.message || "Upload failed",
    });
  }
};

module.exports = { uploadFile };