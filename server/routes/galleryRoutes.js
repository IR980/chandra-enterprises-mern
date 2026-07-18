import express from "express";

import {getGalleryImages,addGalleryMedia,deleteGalleryMedia,updateGalleryMedia} from "../controllers/galleryController.js";
import galleryUpload from "../middleware/galleryUploadMiddleware.js";
const router = express.Router();

router.get("/", getGalleryImages);

router.post("/", galleryUpload.single("media"), addGalleryMedia);

router.put("/:id", galleryUpload.single("media"), updateGalleryMedia);

router.delete("/:id", deleteGalleryMedia);

export default router;
