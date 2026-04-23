// validators/file.validator.js
const { z } = require("zod");

const uploadSchema = z.object({
  folderId: z.string().cuid().optional(),
});

module.exports = { uploadSchema };