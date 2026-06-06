import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

import { motion } from "framer-motion";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE REGISTER

  const handleSubmit = async (e) => {
    e.preventDefault();
      
    try {
      await registerUser(formData);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative px-6">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full"></div>

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-16 shadow-2xl"
      >

        {/* Heading */}
        <div className="text-center">

          <div className="inline-block bg-yellow-500/10 text-yellow-400 px-5 py-2 rounded-full text-sm font-semibold border border-yellow-500/20">
            Create Account
          </div>

          <h1 className="mt-8 text-5xl font-extrabold text-white">
            Register Now
          </h1>

          <p className="mt-5 text-gray-400">
            Create your secure Chandra Enterprises account.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-7"
        >

          {/* Name */}
          <div className="relative">

            <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-black border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white outline-none focus:border-green-500 transition-all"
            />

          </div>

          {/* Email */}
          <div className="relative">

            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-black border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white outline-none focus:border-yellow-400 transition-all"
            />

          </div>

          {/* Phone */}
          <div className="relative">

            <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-black border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white outline-none focus:border-green-500 transition-all"
            />

          </div>

          {/* Password */}
          <div className="relative">

            <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full bg-black border border-white/10 rounded-2xl pl-14 pr-14 py-5 text-white outline-none focus:border-yellow-400 transition-all"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            >

              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}

            </button>

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-green-500 text-black py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Create Account
          </button>

        </form>

        {/* Bottom */}
        <div className="mt-10 text-center text-gray-400">

          Already have an account?{" "}

          <a
            href="/login"
            className="text-green-400 hover:text-green-300 transition"
          >
            Login Here
          </a>

        </div>

      </motion.div>

    </div>
  );
};

export default Register;
