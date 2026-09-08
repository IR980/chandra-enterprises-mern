import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaWhatsapp,
  FaLeaf,
  FaTruck,
  FaBoxOpen,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import heroVideo from "../../assets/videos/hero-video.mp4";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ================= VIDEO OVERLAY ================= */}
      <div className="absolute inset-0 z-1 bg-black/20" />

      <div className="absolute inset-0 z-10 bg-linear from-green-950/90 via-green-900/50 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 h-72 bg-linear from-black via-black/60 to-transparent" />

      {/* Decorative lights */}
      <div className="absolute right-10 top-1/4 z-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-[100px]" />

      <div className="absolute bottom-20 left-10 z-10 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />

      {/* ================= CENTER BRAND BUTTON ================= */}
      <div className="absolute inset-0 z-30 flex items-end justify-end px-6 pb-8 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        <motion.button
          onClick={toggleContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: showContent ? 0 : 1,
            scale: showContent ? 0.8 : 1,
          }}
          transition={{ duration: 0.5 }}
          className={`${
            showContent ? "pointer-events-none" : "pointer-events-auto"
          } group relative`}
        >
          {/* Outer glow */}
          <span className="absolute -inset-5 rounded-full bg-green-500/5 blur-xl transition-all duration-500 group-hover:bg-green-400/30" />

          {/* Button */}
          <span className="relative flex items-center gap-4 rounded-full border border-white/30 bg-black/5 px-6 py-4 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-yellow-400/60 sm:px-8 sm:py-5">
            {/* Logo icon */}
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear from-green-500 to-green-800 text-lg text-white shadow-lg sm:h-12 sm:w-12 sm:text-xl">
              <FaLeaf />
            </span>

            {/* Text */}
            <span className="text-left">
              <span className="block text-[10px] uppercase tracking-[0.25em] text-yellow-300 sm:text-xs sm:tracking-[0.3em]">
                Welcome to
              </span>

              <span className="block text-base font-bold tracking-wide text-white sm:text-xl lg:text-2xl">
                Chandra Enterprises
              </span>
            </span>

            {/* Arrow */}
            <span className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm text-green-950 transition-transform duration-500 group-hover:translate-x-1 sm:ml-2 sm:h-10 sm:w-10 sm:text-base">
              <FaArrowRight />
            </span>
          </span>
        </motion.button>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 flex min-h-screen items-center"
          >
            <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
              <div className="max-w-4xl">
                {/* ================= BADGE =================
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 backdrop-blur-md"
                >
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
                    From Farm to Market
                  </span>
                </motion.div> */}

                {/* ================= MAIN HEADING ================= */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                  className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl"
                >
                  Premium
                  <span className="block bg-linear-to-r from-green-300 via-green-400 to-yellow-300 bg-clip-text text-transparent">
                    Bananas From India
                  </span>
                </motion.h1>

                {/* ================= DESCRIPTION ================= */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                  }}
                  className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg"
                >
                  Delivering fresh, premium-quality bananas from trusted farms
                  to markets with reliable packaging, logistics and supply
                  solutions.
                </motion.p>

                {/* ================= BUTTONS ================= */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                  }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                  {/* Products */}
                  <Link
                    to="/products"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-green-950 shadow-xl shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
                  >
                    Explore Products
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/9694578476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    <FaWhatsapp className="text-xl text-green-400" />
                    Contact Us
                  </a>
                </motion.div>
              </div>

              {/* ================= FEATURE CARDS ================= */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                }}
                className="mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3"
              >
                {/* Card 1 */}
                <div className="group rounded-2xl border border-white/15 bg-black/30 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:bg-black/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-xl text-green-400">
                    <FaLeaf />
                  </div>

                  <h3 className="text-lg font-bold">Farm Fresh</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Carefully sourced fresh bananas from trusted farms.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group rounded-2xl border border-white/15 bg-black/30 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-black/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/20 text-xl text-yellow-300">
                    <FaBoxOpen />
                  </div>

                  <h3 className="text-lg font-bold">Premium Packaging</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Quality packaging designed to protect freshness.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group rounded-2xl border border-white/15 bg-black/30 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-black/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/20 text-xl text-blue-300">
                    <FaTruck />
                  </div>

                  <h3 className="text-lg font-bold">Reliable Logistics</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Efficient transportation from farm to destination.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CLOSE BUTTON ================= */}
      <AnimatePresence>
        {showContent && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={toggleContent}
            className="absolute right-6 top-24 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-white/20"
            aria-label="Hide hero content"
          >
            ×
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================= JOURNEY LABEL ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60 md:flex"
      >
        <span className="h-px w-10 bg-white/30" />
        Farm to Market
        <span className="h-px w-10 bg-white/30" />
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-7 right-7 z-30 hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/70 backdrop-blur-md md:flex"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
