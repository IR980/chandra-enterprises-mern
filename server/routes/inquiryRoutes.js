import express from "express";

import {createInquiry,getAllInquiries,getInquiryById,updateInquiryStatus,deleteInquiry, getRecentInquiries,} from "../controllers/inquiryController.js";

const router = express.Router();

// Customer
router.post("/", createInquiry);

// Admin
router.get("/", getAllInquiries);
router.get("/status", getRecentInquiries);
router.get("/recent", getRecentInquiries);
router.get("/:id", getInquiryById);

router.patch("/:id/status", updateInquiryStatus);

router.delete("/:id", deleteInquiry);

export default router;
