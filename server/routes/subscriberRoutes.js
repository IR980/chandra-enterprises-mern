import express from "express";

import {subscribeEmail,} from "../controllers/subscriberController.js";
import {getSubscribers, deleteSubscriber} from "../controllers/subscriberController.js";
const router = express.Router();

router.post("/", subscribeEmail);
router.get("/", getSubscribers);
router.delete("/:id", deleteSubscriber);

export default router;