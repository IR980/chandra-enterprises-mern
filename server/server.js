
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";

dotenv.config({
  path: path.resolve(".env"),
});


import express from "express";
import cors from "cors";
import dns from "dns";

import inquiryRoutes from "./routes/inquiryRoutes.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
// DNS Servers
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express(); 

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/dashboard", dashboardRoutes);
// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API Running...");
}); 

const PORT = process.env.PORT || 5000;

// START SERVER 
const startServer = async () => {
  try {

    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error("Server Error:", error);

  }
};

startServer();
