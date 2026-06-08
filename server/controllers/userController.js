
import bcrypt from "bcryptjs";
import User from "../models/User.js";

/* =========================================
   UPDATE PROFILE
========================================= */
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    );

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

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      role: updatedUser.role,
      profilePicture: updatedUser.profilePicture,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* =========================================
   UPLOAD PROFILE PICTURE
========================================= */
export const uploadProfilePicture = async (
  req,
  res
) => {
  try {
    const user = await User.findById(
      req.user._id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Please upload an image",
      });
    }

    user.profilePicture =req.file.path;

    const updatedUser =await user.save();

    res.status(200).json({
      message:
        "Profile picture uploaded successfully",profilePicture:user.profilePicture,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

