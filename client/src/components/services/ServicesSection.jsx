import { motion } from "framer-motion";

import {FaTruckMoving,FaWarehouse,FaBoxes,FaShippingFast,FaTemperatureLow,FaLeaf,} from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf />,
    title: "Banana Wholesale Supply",
    description:
      "Premium quality bananas supplied to wholesalers, retailers, and distributors across India.",
    color: "from-green-500 to-emerald-600",
  },

  {
    icon: <FaTruckMoving />,
    title: "Pan India Logistics",
    description:
      "Reliable transportation network ensuring fast and safe banana delivery.",
    color: "from-orange-500 to-red-500",
  },

  {
    icon: <FaTemperatureLow />,
    title: "Cold Storage Services",
    description:
      "Modern cold storage infrastructure maintaining freshness and shelf life.",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: <FaShippingFast />,
    title: "Reefer Transportation",
    description:
      "Temperature-controlled reefer truck delivery for hygienic transportation.",
    color: "from-yellow-400 to-orange-500",
  },

  {
    icon: <FaBoxes />,
    title: "Packaging & Loading",
    description:
      "Export-standard packaging and professional loading operations.",
    color: "from-purple-500 to-pink-500",
  },

  {
    icon: <FaWarehouse />,
    title: "Warehouse Management",
    description:
      "Efficient warehouse management with organized storage and dispatch systems.",
    color: "from-lime-500 to-green-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-12 bg-gray-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <div className="inline-block bg-green-500/10 text-green-400 px-3 py-2 rounded-full text-sm font-semibold mb-4 border border-green-500/20">
            Our Services
          </div>

          <h2 className="text-3xl md:text-3xl font-extrabold text-white leading-tight">
            Complete Banana Export &
            <span className="text-yellow-400 block mt-2">
              Logistics Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Chandra Enterprises provides end-to-end banana supply,
            cold storage, packaging, and transportation services
            with modern logistics infrastructure.
          </p>

        </motion.div>

        {/* Services Grid */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
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

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
              ></div>

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-2xl overflow-hidden">

                {/* Top Gradient */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${service.color}`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl bg-linear-to-r ${service.color} shadow-lg`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Button */}
                <button className="mt-6 text-yellow-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Learn More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >

          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-5xl font-extrabold text-yellow-400">
              500+
            </h3>

            <p className="mt-3 text-gray-300">
              Successful Deliveries
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-5xl font-extrabold text-green-400">
              50+
            </h3>

            <p className="mt-3 text-gray-300">
              Cities Covered
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-5xl font-extrabold text-orange-400">
              100T
            </h3>

            <p className="mt-3 text-gray-300">
              Cold Storage Capacity
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;