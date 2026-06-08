import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { loginUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      login(data);

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative px-6">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-10 shadow-2xl"
      >
        {/* Close Button */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 text-white flex items-center justify-center transition-all duration-300"
          >
            <FaTimes />
          </button>
        </div>
        {/* Heading */}
        <div className="text-center">
          <div className="inline-block bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20">
            Welcome Back
          </div>

          <h1 className="mt-6 text-4xl font-extrabold text-white">
            Login Account
          </h1>

          <p className="mt-5 text-gray-400">
            Securely access your Chandra Enterprises account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-14 space-y-8">
          {/* Email */}
          <div>
            <label className="block mb-3 text-gray-300">Email Address</label>

            <div className="relative">
              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-black border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white outline-none focus:border-green-500 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-3 text-gray-300">Password</label>

            <div className="relative">
              <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full bg-black border border-white/10 rounded-2xl pl-14 pr-14 py-5 text-white outline-none focus:border-yellow-400 transition-all"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-yellow-400 text-black py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Login Account
          </button>
        </form>

        {/* Bottom */}
        <div className="mt-10 text-center text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 hover:text-yellow-300 transition font-semibold"
          >
            Create Account
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
