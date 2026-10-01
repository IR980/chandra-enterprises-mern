import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import logo from "../../assets/logo/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // AUTH CONTEXT
  const { user, logout } = useAuth();

  // LOGOUT FUNCTION
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  // HANDLE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // NAVIGATION LINKS
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Track Vehicles",
      path: "/track-vehicles",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Chandra Enterprises Logo"
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <h1 className="text-xl font-bold text-white">
                Chandra Enterprises
              </h1>
            </div>
          </Link>

          {/* PAYMENT LINK */}
          <Link
            to="/payment"
            className="hidden lg:block hover:text-yellow-400 transition text-blue-50 cursor-pointer"
          >
            Payment
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE - DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            {/* USER LOGIN STATE */}
            {user ? (
              <div className="flex items-center gap-4">
                {/* USER PROFILE */}
                <Link
                  to="/profile"
                  className="flex items-center gap-3 rounded-full px-2 py-1 hover:bg-gray-600/50 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-2xl text-yellow-400" />
                  )}

                  <div>
                    <h4 className="text-white font-semibold">{user.name}</h4>
                  </div>
                </Link>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* LOGIN */}
                <Link
                  to="/login"
                  className="hidden lg:block hover:text-yellow-400 transition text-blue-50 cursor-pointer"
                >
                  Login
                </Link>

                {/* REGISTER */}
                <Link
                  to="/register"
                  className="hidden lg:block hover:text-yellow-400 transition text-blue-50 cursor-pointer"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-3xl text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-6 gap-5">
            {/* NAV LINKS */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* MOBILE PAYMENT */}
            <Link
              to="/payment"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white hover:text-yellow-400 transition"
            >
              Payment
            </Link>

            {/* MOBILE USER AUTH */}
            {user ? (
              <div className="space-y-4">
                {/* PROFILE */}
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 rounded-full px-2 py-2 hover:bg-gray-600/50 transition-all duration-300"
                >
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-2xl text-yellow-400" />
                  )}

                  <div>
                    <h4 className="text-white font-semibold">{user.name}</h4>
                  </div>
                </Link>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {/* LOGIN */}
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center bg-yellow-400 text-black py-3 rounded-full font-medium"
                >
                  Login
                </Link>

                {/* REGISTER */}
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="text-center bg-white text-black py-3 rounded-full font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
