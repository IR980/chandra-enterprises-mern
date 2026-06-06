import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const updateProfile = async (req,res) => {
  try {

    const user =
      await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name =
      req.body.name || user.name;

    user.phone =
      req.body.phone || user.phone;

    if (req.body.password) {

      const salt =
        await bcrypt.genSalt(10);

      user.password =
        await bcrypt.hash(
          req.body.password,
          salt
        );

    }

    const updatedUser =
      await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      role: updatedUser.role,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};