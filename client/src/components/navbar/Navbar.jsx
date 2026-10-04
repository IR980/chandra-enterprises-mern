import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiTruck } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // =========================================================
  // AUTH CONTEXT
  // =========================================================

  const { user, logout } = useAuth();

  // =========================================================
  // LOGOUT
  // =========================================================

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  // =========================================================
  // CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
  // =========================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================================================
  // HANDLE SCROLL
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // NAVIGATION LINKS
  // =========================================================

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
      special: true,
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl"
            : "bg-black/30 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-375 px-4 sm:px-6 lg:px-8">
          <div className="flex h-19 items-center justify-between gap-4 lg:h-20">
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="group flex shrink-0 items-center gap-3"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Chandra Enterprises Logo"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 transition duration-300 group-hover:ring-yellow-400/70 sm:h-14 sm:w-14"
                />

                {/* Small Online Indicator */}
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-green-400" />
              </div>

              <div className="hidden xl:block">
                <h1 className="whitespace-nowrap text-lg font-bold leading-tight text-white">
                  Chandra Enterprises
                </h1>

                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-green-300">
                  Farm Fresh • Fast Delivery
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-medium transition-all duration-300 xl:px-4 ${
                      link.special
                        ? isActive
                          ? "bg-green-600 text-white shadow-lg shadow-green-600/30"
                          : "border border-green-400/30 bg-green-500/10 text-green-300 hover:border-green-400/50 hover:bg-green-500/20 hover:text-green-200"
                        : isActive
                          ? "text-yellow-400"
                          : "text-white/90 hover:bg-white/5 hover:text-yellow-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Truck Icon */}
                      {link.special && (
                        <FiTruck
                          className={`text-base ${
                            isActive ? "text-white" : "text-green-400"
                          }`}
                        />
                      )}

                      <span>{link.name}</span>

                      {/* Active Underline */}
                      {!link.special && (
                        <span
                          className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-300 ${
                            isActive ? "w-5/6" : "w-0 group-hover:w-5/6"
                          }`}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* =================================================
                RIGHT SIDE DESKTOP
            ================================================= */}

            <div className="hidden items-center gap-2 lg:flex xl:gap-3">
              {/* PAYMENT */}
              <Link
                to="/payment"
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-yellow-400 xl:px-4"
              >
                Payment
              </Link>

              {/* USER LOGGED IN */}
              {user ? (
                <div className="flex items-center gap-2">
                  {/* Profile */}
                  <Link
                    to="/profile"
                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-3 transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/10"
                  >
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture}
                        alt={user.name}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="text-3xl text-yellow-400" />
                    )}

                    <span className="hidden max-w-25 truncate text-sm font-semibold text-white xl:block">
                      {user.name}
                    </span>
                  </Link>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="rounded-full bg-red-500/90 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {/* LOGIN */}
                  <Link
                    to="/login"
                    className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-yellow-400"
                  >
                    Login
                  </Link>

                  {/* REGISTER */}
                  <Link
                    to="/register"
                    className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-yellow-400/10 transition-all duration-300 hover:bg-yellow-300 hover:shadow-yellow-400/30"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:border-yellow-400/30 hover:bg-white/10 hover:text-yellow-400 lg:hidden"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="mx-auto max-w-375 px-5 py-6">
                {/* Mobile Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all ${
                          link.special
                            ? isActive
                              ? "bg-green-600 text-white"
                              : "bg-green-500/10 text-green-300 hover:bg-green-500/20"
                            : isActive
                              ? "bg-yellow-400/10 text-yellow-400"
                              : "text-white hover:bg-white/5 hover:text-yellow-400"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            {link.special && <FiTruck className="text-lg" />}

                            <span>{link.name}</span>
                          </div>

                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-current" />
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>

                {/* Mobile Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Payment */}
                <Link
                  to="/payment"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3.5 text-base font-medium text-white transition hover:bg-white/5 hover:text-yellow-400"
                >
                  Payment
                </Link>

                {/* =================================================
                    MOBILE AUTH
                ================================================= */}

                {user ? (
                  <div className="mt-4 space-y-3">
                    {/* Profile */}
                    <Link
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt={user.name}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      ) : (
                        <FaUserCircle className="text-3xl text-yellow-400" />
                      )}

                      <div>
                        <p className="text-xs text-gray-400">Welcome</p>

                        <p className="font-semibold text-white">{user.name}</p>
                      </div>
                    </Link>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full rounded-xl bg-red-500 py-3.5 font-semibold text-white transition hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {/* Login */}
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 py-3.5 text-center font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                    >
                      Login
                    </Link>

                    {/* Register */}
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl bg-yellow-400 py-3.5 text-center font-bold text-black transition hover:bg-yellow-300"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
