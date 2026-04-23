// services/file.service.js
const prisma = require("../prisma/client");
const { uploadToCloudinary } = require("../utils/cloudinary");

const upload = async ({ file, userId, folderId }) => {
  // 1. Upload to Cloudinary
  const cloudRes = await uploadToCloudinary(file);

  // 2. Save metadata to DB
  const savedFile = await prisma.file.create({
    data: {
      name: file.originalname,
      size: file.size,
      url: cloudRes.secure_url,
      folderId: folderId || null,
      userId,
    },
  });

  return savedFile;
};

module.exports = { upload };