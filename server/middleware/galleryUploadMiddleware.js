import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith("video");

    return {
      folder: isVideo
        ? "chandra-enterprises/gallery-videos"
        : "chandra-enterprises/gallery-images",

      resource_type: isVideo ? "video" : "image",
    };
  },
});

const galleryUpload = multer({ storage });

export default galleryUpload;
