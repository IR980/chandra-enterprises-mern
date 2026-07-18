import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { adminLogin } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await adminLogin(formData);

      login(data);

      toast.success("Welcome Admin");

      navigate("/admin/dashboard", {
        replace: true,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">
        {/* Close Button */}

        <div className="text-center mb-8">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Chandra Enterprises"
              className="w-28 h-28 object-contain rounded-full bg-white p-2 shadow-lg border-2 border-yellow-400"
            />
          </div>

          <h1 className="text-3xl font-bold text-white mt-5">
            Chandra Enterprises
          </h1>

          <p className="text-yellow-400 font-medium mt-2">Admin Panel</p>

          <p className="text-gray-400 text-sm mt-1">Secure Login Portal</p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="absolute top-33 right-160">
            <button
              onClick={() => navigate("/")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 text-white flex items-center justify-center transition-all duration-300"
            >
              <FaTimes />
            </button>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-500" size={20} />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@company.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-yellow-400"
                required
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="block text-gray-300 mb-2">Password</label>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-gray-500" size={20} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white outline-none focus:border-yellow-400"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
          </div>

          {/* Remember */}

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-yellow-400" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-yellow-400 hover:text-yellow-500"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login */}

          <button
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
