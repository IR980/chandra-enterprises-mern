import { motion } from "framer-motion";

import {FaTruck,FaWarehouse,FaBoxes,FaShippingFast,FaLeaf,FaIndustry,FaWhatsapp,} from "react-icons/fa";

import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";
import service5 from "../../assets/images/service5.jpg";
import service6 from "../../assets/images/service6.jpg";

const services = [
  {
    id: 1,
    image: service1,
    icon: <FaLeaf />,
    title: "Banana Wholesale Supply",
    description:
      "Premium quality banana supply for wholesalers, distributors, and retailers across India.",
  },

  {
    id: 2,
    image: service2,
    icon: <FaWarehouse />,
    title: "Cold Storage Facilities",
    description:
      "Modern cold storage infrastructure maintaining freshness and product quality.",
  },

  {
    id: 3,
    image: service3,
    icon: <FaTruck />,
    title: "Pan India Logistics",
    description:
      "Fast transportation and delivery network for secure banana supply operations.",
  },

  {
    id: 4,
    image: service4,
    icon: <FaBoxes />,
    title: "Packaging & Loading",
    description:
      "Professional packaging and safe loading services for wholesale and export supply.",
  },

  {
    id: 5,
    image: service5,
    icon: <FaShippingFast />,
    title: "Reefer Truck Delivery",
    description:
      "Temperature-controlled reefer transportation for freshness preservation.",
  },

  {
    id: 6,
    image: service6,
    icon: <FaIndustry />,
    title: "Warehouse Management",
    description:
      "Large-scale warehouse management and distribution services for efficient supply chain operations.",
  },
];

const processSteps = [
  "Farm Collection",
  "Quality Inspection",
  "Cold Storage",
  "Packaging & Loading",
  "Transportation",
  "Fast Delivery",
];

const Services = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-24 via-black">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold border border-white/10">
              Our Services
            </div>

            <h1 className="mt-4 text-3xl md:text-3xl font-extrabold leading-tight">

              Professional Banana Logistics & Supply Services
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">

              Chandra Enterprises provides banana supply, cold storage,
              logistics, transportation, packaging, and warehouse services
              across India.

            </p>

          </motion.div>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section className="py-10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group relative"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl"></div>

                {/* Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-3 transition-all duration-500">

                  {/* Image */}
                  <div className="h-60 overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-3xl bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center text-3xl text-white">

                      {service.icon}

                    </div>

                    <h3 className="mt-4 text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS SECTION */}
      <section className="py-10 from-black to-gray-950">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-block bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/20">
              Our Process
            </div>

            <h2 className="mt-14 text-3xl font-extrabold">
              From Farm To Delivery Network
            </h2>

          </div>

          {/* Timeline */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-6 gap-8">

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative text-center"
              >

                {/* Number */}
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center text-2xl font-bold shadow-2xl">

                  {index + 1}

                </div>

                {/* Line */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-1 bg-gradient-to-r from-green-500 to-yellow-500"></div>
                )}

                <h3 className="mt-6 text-xl font-bold">
                  {step}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-black to-yellow-900">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-extrabold leading-tight">

              Need Reliable Banana Supply & Logistics?

            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed">

              Contact Chandra Enterprises for premium banana wholesale supply,
              cold storage facilities, and fast transportation services.

            </p>

            <div className="flex justify-center mt-10">

              <a
                href="https://wa.me/919694578476"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >

                WhatsApp Inquiry

              </a>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default Services;
