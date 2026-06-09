import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message, product } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "Name, Email, Phone and Message are required",
      });
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      message,
      product: product || "General Inquiry",
    });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};