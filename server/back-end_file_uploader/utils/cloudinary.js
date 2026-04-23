// utils/cloudinary.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "drive-app" },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );

    stream.end(file.buffer);
  });
};

module.exports = { uploadToCloudinary };