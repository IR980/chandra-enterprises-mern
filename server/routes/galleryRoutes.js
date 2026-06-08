import express from "express";

import {getGalleryImages,addGalleryMedia,} from "../controllers/galleryController.js";

import galleryUpload from "../middleware/galleryUploadMiddleware.js";

const router = express.Router();

router.get("/", getGalleryImages);

router.post("/upload",galleryUpload.single("media"),addGalleryMedia);

export default router;