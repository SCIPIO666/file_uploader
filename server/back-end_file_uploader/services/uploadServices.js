// file.service.js
import prisma from "../../prisma/client.js";
import { uploadToCloudinary } from "./cloudinary.js";

export const upload = async ({ file, userId, folderId }) => {
  // ✅ 1. Upload to cloud
  const cloudRes = await uploadToCloudinary(file);

  // ✅ 2. Save metadata
  const savedFile = await prisma.file.create({
    data: {
      name: file.originalname,
      size: file.size,
      url: cloudRes.secure_url,
      folderId,
      userId
    }
  });

  return savedFile;
};