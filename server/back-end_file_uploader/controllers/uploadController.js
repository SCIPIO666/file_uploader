// file.controller.js
import { uploadSchema } from "./file.validator.js";
import * as fileService from "./file.service.js";

export const uploadFile = async (req, res) => {
  try {
    // ✅ 1. Validate body
    const data = uploadSchema.parse(req.body);

    // ❗ 2. Ensure file exists
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // ✅ 3. Call service
    const result = await fileService.upload({
      file: req.file,
      userId: req.user.id,
      folderId: data.folderId
    });

    // ✅ 4. Return response
    res.status(201).json(result);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};