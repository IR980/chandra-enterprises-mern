import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FaUserCircle,
  FaTimes,
  FaCamera,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "../../api/userApi";
import { uploadProfileImage } from "../../api/userApi";
const Profile = () => {
  const { user, logout, updateUser } = useAuth();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updated = await updateProfile(formData, user.token);

      updateUser(updated);

      toast.success("Profile updated successfully");

      setFormData({
        ...formData,
        password: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      const formData = new FormData();

      formData.append("image", file);

      const data = await uploadProfileImage(formData, user.token);

      updateUser({
        profilePicture: data.profilePicture,
      });

      toast.success("Profile picture updated");
    } catch (error) {
      toast.error("Upload failed");
    }
  };
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Card */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-2xl p-8 md:p-12 shadow-2xl">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/")}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center transition-all duration-300"
            >
              <FaTimes />
            </button>
          </div>

          {/* Profile Header */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto">
              <div className="w-32 h-32 rounded-full bg-linear-to-r from-yellow-400 to-green-500 flex items-center justify-center text-7xl text-black shadow-2xl overflow-hidden">
                {user?.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUserCircle />
                )}
              </div>

              {/* Future Upload Button */}
              <label className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-xl cursor-pointer">
                <FaCamera />

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold">{user?.name}</h1>

            <p className="mt-2 text-gray-400">{user?.email}</p>

            <span className="inline-block mt-4 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm capitalize">
              {user?.role}
            </span>
          </div>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
              <h3 className="text-green-400 text-3xl font-bold">Active</h3>

              <p className="text-gray-400 mt-2">Account Status</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
              <h3 className="text-yellow-400 text-3xl font-bold">Verified</h3>

              <p className="text-gray-400 mt-2">Profile Status</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
              <h3 className="text-cyan-400 text-3xl font-bold">Member</h3>

              <p className="text-gray-400 mt-2">User Type</p>
            </div>
          </div>

          {/* User Information */}
          <div className="mt-12 bg-black/30 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-8">
              Account Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-400">Full Name</p>

                <h3 className="text-xl font-semibold mt-2">{user?.name}</h3>
              </div>

              <div>
                <p className="text-gray-400">Email Address</p>

                <h3 className="text-xl font-semibold mt-2">{user?.email}</h3>
              </div>

              <div>
                <p className="text-gray-400">Phone Number</p>

                <h3 className="text-xl font-semibold mt-2">{user?.phone}</h3>
              </div>

              <div>
                <p className="text-gray-400">Role</p>

                <h3 className="text-xl font-semibold mt-2 capitalize">
                  {user?.role}
                </h3>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-yellow-400">Edit Profile</h2>

            <div>
              <label className="block mb-2 text-gray-400">Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">Phone Number</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className="w-full bg-black border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">New Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Leave blank if you don't want to change password"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none focus:border-yellow-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-linear-to-r from-green-500 to-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
