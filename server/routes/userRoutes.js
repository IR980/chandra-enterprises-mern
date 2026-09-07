import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

import {updateProfile,uploadProfilePicture,} from "../controllers/userController.js";

const router = express.Router();

/* Update Profile */
router.put("/profile",protect,updateProfile);

/* Upload Profile Picture */
router.post("/profile/upload",protect,upload.single("image"),uploadProfilePicture);
export default router;

