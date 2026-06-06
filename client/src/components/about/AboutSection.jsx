import { motion } from "framer-motion";
import {FaWarehouse,FaTruckMoving,FaLeaf,FaCheckCircle,} from "react-icons/fa";

import aboutImage from "../../assets/images/about-banana.jpg";
import warehouseImage from "../../assets/images/warehouse.jpg";

const AboutSection = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Image */}
            <img
              src={aboutImage}
              alt="Banana Export"
              className="rounded-3xl shadow-2xl w-full height: 550px object-cover"
            />

            {/* Floating Warehouse Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute -bottom-10 -right-5 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-5 w-64"
            >
              <img
                src={warehouseImage}
                alt="Warehouse"
                className="rounded-2xl h-32 w-full object-cover"
              />

              <div className="mt-4">
                <h3 className="text-xl font-bold text-green-700">
                  500 Ton Cold Storage
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  Advanced cold storage and reefer logistics infrastructure.
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* Section Tag */}
            <div className="inline-block bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              About Chandra Enterprises
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              Trusted Banana Export &
              <span className="text-green-700 block mt-2">
                Logistics Partner
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Chandra Enterprises is a trusted wholesale banana supplier
              specializing in premium quality bananas, cold storage,
              packaging, and fast transportation services across India.
              We provide reliable logistics support with modern storage
              infrastructure and hygienic handling processes.
            </p>

            {/* Feature List */}
            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-700">
                  <FaLeaf size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Fresh Farm Bananas
                  </h4>

                  <p className="text-gray-600">
                    Premium export-quality bananas sourced directly from farms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl text-yellow-700">
                  <FaWarehouse size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Modern Cold Storage
                  </h4>

                  <p className="text-gray-600">
                    Large-scale storage facilities with controlled temperature systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-700">
                  <FaTruckMoving size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Fast Pan India Delivery
                  </h4>

                  <p className="text-gray-600">
                    Efficient logistics network with reefer transportation support.
                  </p>
                </div>
              </div>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-bold text-green-700">3+</h3>
                <p className="mt-2 text-gray-600">Years Experience</p>
              </div>

              <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
                <p className="mt-2 text-gray-600">Cities Served</p>
              </div>

            </div>

            {/* CTA */}
            <button className="mt-12 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3">
              <FaCheckCircle />
              Explore Our Services
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;