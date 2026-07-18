import express from "express";
import {getProducts,getProductById,createProduct,updateProduct,deleteProduct,} from "../controllers/productController.js";
import productUpload from "../middleware/productUploadMiddleware.js";

const router = express.Router();
// public routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// admin routes
router.post("/", productUpload.single("image"), createProduct);

router.put("/:id", productUpload.single("image"), updateProduct);

router.delete("/:id", deleteProduct);

export default router;