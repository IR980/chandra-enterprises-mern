import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { submitInquiry } from "../../api/inquiryApi";

import {FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaWhatsapp,FaWarehouse,FaTruck,} from "react-icons/fa";

const locations = [
  {
    id: 1,
    title: "Main Office",
    type: "Head Office",
    address: "KHASRA NO.153, RAIPUR ROAD, Nanakpur Banger, Greater Noida",
    phone: "+91 9694578476",
    storage: "500 Tons",
    services: "Wholesale Supply",
    icon: <FaMapMarkerAlt />,
  },

  {
    id: 2,
    title: "Cold Storage Facility",
    type: "Cold Storage",
    address: "Industrial Area, Greater Noida",
    phone: "+91 9694578476",
    storage: "500 Tons",
    services: "Cold Chain Storage",
    icon: <FaWarehouse />,
  },

  {
    id: 3,
    title: "Logistics Hub",
    type: "Transportation",
    address: "Transport Nagar, Delhi NCR",
    phone: "+91 9694578476",
    storage: "Reefer Trucks",
    services: "Fast Delivery",
    icon: <FaTruck />,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitInquiry(formData);

      toast.success(response.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit inquiry");
    }
  };
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-white/10 px-5 py-2 rounded-full text-yellow-400 text-sm font-semibold border border-white/10">
              Contact Us
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Our Presence & Across India
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              Contact Chandra Enterprises for premium banana supply, cold
              storage facilities, logistics services, and wholesale distribution
              support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl"
            >
              <div className="w-15 h-15 mx-auto rounded-3xl bg-green-600 flex items-center justify-center text-3xl">
                <FaPhoneAlt />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Call Us</h3>

              <p className="mt-4 text-gray-400">+91 9694578476</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl"
            >
              <div className="w-15 h-15 mx-auto rounded-3xl bg-yellow-500 flex items-center justify-center text-3xl text-black">
                <FaEnvelope />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Email Us</h3>

              <p className="mt-4 text-gray-400">subhash.tom@gmail.com</p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl"
            >
              <div className="w-15 h-15 mx-auto rounded-3xl bg-green-500 flex items-center justify-center text-3xl">
                <FaWhatsapp />
              </div>

              <h3 className="mt-6 text-2xl font-bold">WhatsApp</h3>

              <a
                href="https://wa.me/919694578476"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-gray-400 hover:text-green-400 transition"
              >
                Start Chat
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION CARDS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-yellow-500/10 text-yellow-400 px-5 py-2 rounded-full text-sm font-semibold border border-yellow-500/20">
              Our Locations
            </div>

            <h2 className="mt-6 text-4xl font-extrabold">
              Warehouses & Logistics Network
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
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
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-15 h-15 rounded-3xl bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center text-3xl">
                    {location.icon}
                  </div>

                  <h3 className="mt-8 text-3xl font-bold">{location.title}</h3>

                  <div className="mt-6 space-y-4 text-gray-400">
                    <p>
                      <span className="text-white font-semibold">Type:</span>{" "}
                      {location.type}
                    </p>

                    {/* <p>
                      <span className="text-white font-semibold">Address:</span>{" "}
                      {location.address}
                    </p> */}

                    <p>
                      <span className="text-white font-semibold">Contact:</span>{" "}
                      {location.phone}
                    </p>

                    <p>
                      <span className="text-white font-semibold">Storage:</span>{" "}
                      {location.storage}
                    </p>

                    <p>
                      <span className="text-white font-semibold">
                        Services:
                      </span>{" "}
                      {location.services}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACT FORM */}
      <section className="pb-12 bg-sky-400">
        <div className="max-w-5xl mx-auto px-4">
          <div className=" border-white/10 rounded-[40px] p-10 lg:p-10 backdrop-blur-xl">
            <div className="text-center">

              <h2 className="mt-6 text-5xl font-extrabold">
                Let’s Discuss Your
                <span className="block text-white mt-2">
                  Banana Supply Requirement
                </span>
              </h2>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 grid md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border text-black border-black rounded-2xl px-6 py-5 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white border text-black border-black rounded-2xl px-6 py-5 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-white border text-black border-black rounded-2xl px-6 py-5 outline-none md:col-span-2"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Your Message"
                className="bg-white border text-black border-black rounded-2xl px-6 py-5 outline-none md:col-span-2"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-yellow-400 hover:bg-yellow-500 text-black py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
