import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "../../api/userApi";

const Profile = () => {
  const { user, logout, updateUser } = useAuth();

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
    window.location.href = "/login";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updated = await updateProfile(
        formData,
        user.token
      );

      updateUser(updated);

      toast.success("Profile updated successfully");

      setFormData({
        ...formData,
        password: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Update failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <FaUserCircle className="text-8xl text-yellow-400 mx-auto" />

          <h1 className="mt-6 text-5xl font-bold">
            My Profile
          </h1>

          <p className="mt-4 text-gray-400">
            Manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-10">

          {/* User Information */}
          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h3 className="text-gray-400 mb-2">
                Full Name
              </h3>

              <p className="text-xl font-semibold">
                {user?.name}
              </p>
            </div>

            <div>
              <h3 className="text-gray-400 mb-2">
                Email
              </h3>

              <p className="text-xl font-semibold">
                {user?.email}
              </p>
            </div>

            <div>
              <h3 className="text-gray-400 mb-2">
                Phone
              </h3>

              <p className="text-xl font-semibold">
                {user?.phone}
              </p>
            </div>

            <div>
              <h3 className="text-gray-400 mb-2">
                Role
              </h3>

              <p className="text-xl font-semibold capitalize">
                {user?.role}
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="my-10 border-t border-white/10"></div>

          {/* Edit Profile Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <h2 className="text-2xl font-bold text-yellow-400">
              Edit Profile
            </h2>

            <div>
              <label className="block mb-2 text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                New Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Leave blank if you don't want to change password"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              Update Profile
            </button>

          </form>

          {/* Logout */}
          <div className="mt-12">

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              Logout
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;