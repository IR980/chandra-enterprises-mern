import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaWhatsapp,
  FaPlay,
  FaLeaf,
  FaTruck,
  FaBoxOpen,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import heroVideo from "../../assets/videos/hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* =========================================================
          VIDEO OVERLAYS
      ========================================================= */}

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/1" />

      {/* Green cinematic gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-green-950/90 via-green-900/20 to-transparent" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-black via-black/20 to-transparent" />

      {/* Subtle yellow glow */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-yellow-400/5 blur-[100px]" />

      {/* Subtle green glow */}
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-green-500/5 blur-[120px]" />

      {/* =========================================================
          TOP BADGE
      ========================================================= */}

      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-28 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-xl shadow-lg">
          <FaLeaf className="text-yellow-400" />

          <span className="text-sm sm:text-base font-medium text-gray-100 whitespace-nowrap">
            From Farm to Market
          </span>
        </div>
      </motion.div> */}

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="w-full pt-32 pb-32">
          <div className="max-w-4xl">
            {/* Small heading */}

            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-0.5 bg-yellow-400" />

              <span className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-semibold">
                Chandra Enterprises
              </span>
            </motion.div> */}

            {/* =====================================================
                MAIN TITLE
            ====================================================== */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight"
            >
              Premium
              <span className="block text-yellow-400">Bananas</span>
              <span className="block text-white">From India</span>
            </motion.h1>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
              className="mt-7 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-200"
            >
              From carefully selected farms to reliable delivery, Chandra
              Enterprises provides quality bananas, modern packaging and
              dependable logistics solutions for businesses across India.
            </motion.p>

            {/* =====================================================
                BUTTONS
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              {/* Products */}

              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold shadow-xl shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Products
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* WhatsApp */}

              <a
                href="https://wa.me/9694578476"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-green-600/90 hover:bg-green-500 text-white font-bold border border-green-400/30 shadow-xl shadow-green-900/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp size={22} />
                WhatsApp Us
              </a>
            </motion.div>

            {/* =====================================================
                FEATURE CARDS
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.9,
              }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl"
            >
              {/* Card 1 */}

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-green-500/20 border border-green-400/20 flex items-center justify-center">
                  <FaLeaf className="text-green-400" />
                </div>

                <div>
                  <p className="text-white font-semibold">Farm Fresh</p>

                  <p className="text-xs text-gray-400 mt-1">Quality Sourcing</p>
                </div>
              </div>

              {/* Card 2 */}

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-yellow-400/20 border border-yellow-300/20 flex items-center justify-center">
                  <FaBoxOpen className="text-yellow-400" />
                </div>

                <div>
                  <p className="text-white font-semibold">Premium Packaging</p>

                  <p className="text-xs text-gray-400 mt-1">Safe & Reliable</p>
                </div>
              </div>

              {/* Card 3 */}

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-400/20 border border-blue-300/20 flex items-center justify-center">
                  <FaTruck className="text-blue-300" />
                </div>

                <div>
                  <p className="text-white font-semibold">Reliable Logistics</p>

                  <p className="text-xs text-gray-400 mt-1">Farm to Market</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          VIDEO PLAY INDICATOR
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        className="hidden lg:flex absolute right-12 bottom-32 z-20 items-center gap-4"
      >
        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/30 border border-white/15 backdrop-blur-xl">
          <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
            <FaPlay className="text-black text-xs ml-0.5" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Our Journey
            </p>

            <p className="text-sm font-semibold text-white">Farm to Market</p>
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
            Scroll
          </span>

          <div className="w-7 h-11 border border-white/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          TOP / BOTTOM CINEMATIC LINES
      ========================================================= */}

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400/50 to-transparent" />
    </section>
  );
};

export default Hero;
