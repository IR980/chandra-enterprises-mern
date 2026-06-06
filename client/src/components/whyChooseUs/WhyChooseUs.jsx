import { motion } from "framer-motion";

import {FaLeaf,FaWarehouse,FaTruckMoving,FaBoxes,FaCheckCircle,FaShippingFast,} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Farm Bananas",
    description:
      "Premium export-quality bananas sourced directly from trusted farms.",
    color: "from-green-500 to-emerald-600",
  },

  {
    icon: <FaWarehouse />,
    title: "Cold Storage Facility",
    description:
      "Advanced cold storage systems ensuring freshness and longer shelf life.",
    color: "from-yellow-400 to-orange-500",
  },

  {
    icon: <FaTruckMoving />,
    title: "Fast Transportation",
    description:
      "Reliable reefer logistics and transportation across India.",
    color: "from-orange-500 to-red-500",
  },

  {
    icon: <FaBoxes />,
    title: "Hygienic Packaging",
    description:
      "Safe, clean, and export-standard banana packaging process.",
    color: "from-green-400 to-lime-500",
  },

  {
    icon: <FaShippingFast />,
    title: "Pan India Delivery",
    description:
      "Efficient delivery network serving wholesalers and distributors.",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: <FaCheckCircle />,
    title: "Trusted Business Partner",
    description:
      "Professional wholesale supplier trusted by buyers across India.",
    color: "from-purple-500 to-pink-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-12 bg-linear-to-b from-gray-400 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            Why Choose Us
          </div>

          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Trusted Banana Export &
            <span className="text-green-700 block mt-2">
              Logistics Solutions
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Chandra Enterprises delivers premium quality bananas with
            reliable logistics, hygienic packaging, and modern cold
            storage infrastructure for wholesalers and distributors.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
              ></div>

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">

                {/* Gradient Border */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${feature.color}`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-2xl text-white text-3xl bg-linear-to-r ${feature.color} shadow-lg`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Button */}
                <button className="mt-6 text-green-700 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Learn More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;