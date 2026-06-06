import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {FaLeaf,FaTruck,FaWarehouse,FaUsers,FaAward,FaGlobeAsia,} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Premium Farm Fresh Quality",
    description:
      "We supply carefully selected premium bananas directly from trusted farms.",
  },

  {
    icon: <FaTruck />,
    title: "Fast Logistics Network",
    description:
      "Strong transportation system with fast delivery across India.",
  },

  {
    icon: <FaWarehouse />,
    title: "Cold Storage Facilities",
    description:
      "Modern cold storage infrastructure for freshness and quality maintenance.",
  },

  {
    icon: <FaGlobeAsia />,
    title: "Pan India Supply",
    description:
      "Reliable banana supply network serving distributors and wholesalers.",
  },
];

const stats = [
  {
    number: "500+",
    title: "Deliveries Completed",
  },

  {
    number: "120+",
    title: "Happy Clients",
  },

  {
    number: "500T",
    title: "Storage Capacity",
  },

  {
    number: "20+",
    title: "Cities Served",
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-26 via-white">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold mb-4">
              About Chandra Enterprises
            </div>
            <p className="mt-4 max-w-4xl mx-auto text-left font-weight text-gray-300 leading-relaxed">
              Chandra Enterprises is a trusted banana supply and logistics
              company delivering premium quality bananas, cold storage
              solutions, transportation, and wholesale distribution services
              across India. Chandra Enterprises is a trusted banana export and
              logistics company established in 2020. We specialize in supplying
              fresh, high-quality bananas to wholesalers, distributors, and
              retailers across India. Our modern cold storage facility helps
              maintain product freshness and quality throughout the supply
              chain. With reliable transportation and efficient logistics
              services, we ensure timely and safe deliveries. We follow hygienic
              packaging standards to preserve the quality and shelf life of
              every shipment. Our commitment to customer satisfaction,
              transparency, and professional service has earned the trust of
              numerous clients. At Chandra Enterprises, we strive to deliver
              farm-fresh bananas with fast, dependable logistics solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/20">
                Our Company Story
              </div>

              <h2 className="mt-4 text-3xl md:text-3xl font-extrabold leading-tight">
                Delivering Freshness
                <span className="block text-green-400 mt-2">Across India</span>
              </h2>

              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                Founded in 2020 by Subhash Chandra, Chandra Enterprises started
                with a vision to provide premium quality bananas and
                professional logistics services to wholesalers, retailers, and
                distributors.
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                Today, we operate modern cold storage facilities, transportation
                systems, and supply chain services that help maintain product
                freshness and timely delivery across multiple cities.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-yellow-500 p-[2px] rounded-[40px]">
                <div className="bg-black rounded-[40px] p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
                      >
                        <h3 className="text-4xl font-extrabold text-yellow-400">
                          {item.number}
                        </h3>

                        <p className="mt-3 text-gray-400">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[40px] p-6 backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-3xl bg-green-500 flex items-center justify-center text-3xl">
                <FaUsers />
              </div>

              <h3 className="mt-4 text-4xl font-bold">Our Mission</h3>

              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                To provide premium quality banana supply, professional
                logistics, and cold storage services with reliability,
                freshness, and customer satisfaction.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-3xl bg-yellow-500 flex items-center justify-center text-3xl text-black">
                <FaAward />
              </div>

              <h3 className="mt-4 text-4xl font-bold">Our Vision</h3>

              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                To become India’s most trusted banana export and logistics brand
                by delivering quality products and modern supply chain
                solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20">
              Why Choose Us
            </div>

            <h2 className="mt-6 text-3xl font-extrabold">
              Trusted By Wholesalers & Distributors
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
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
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center text-3xl text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-5 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 bg-gradient-to-br from-green-900 via-black to-yellow-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold leading-tight">
              Looking For Premium Banana
              <span className="block text-yellow-400 mt-3">
                Supply & Logistics?
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Contact Chandra Enterprises today for premium quality bananas,
              cold storage facilities, and fast transportation services.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <a
                href="https://wa.me/919801835063"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                WhatsApp Inquiry
              </a>

              <button
                onClick={() => navigate("/inquiry")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
