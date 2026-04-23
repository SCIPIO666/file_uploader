// file.validator.js
import { z } from "zod";

export const uploadSchema = z.object({
  folderId: z.string().cuid().optional()
});