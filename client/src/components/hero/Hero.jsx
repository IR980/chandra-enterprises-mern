import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import heroImage from "../../assets/images/hero-banner.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-green-900/70 via-black/40 to-yellow-700/40"></div>

      {/* Floating Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl mt-18 font-extrabold leading-tight text-white"
        >
          Premium Banana Exporter from India
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          The export of food products from India is on the rise year after year.
          Banana export from India is one of the rapidly growing export markets. 
          Being one of the largest banana exporters in the world, 
          Indian banana exporter has successfully entered the global market.
          For export of banana, health and quality standards have to be maintained.
          Farm Fresh Bananas with Fast Delivery.
          Trusted wholesale banana supplier providing premium quality bananas,
          cold storage, logistics, and pan India distribution services.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-bold text-yellow-400">500+</h2>
            <p className="mt-2 text-gray-200">Deliveries Completed</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-bold text-yellow-400">120+</h2>
            <p className="mt-2 text-gray-200">Happy Clients</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-bold text-yellow-400">50+</h2>
            <p className="mt-2 text-gray-200">Cities Served</p>
          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">

        <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-2 h-2 bg-white rounded-full"
          ></motion.div>
        </div>

      </div>

    </section>
  );
};

export default Hero;