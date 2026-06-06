import { Link } from "react-router-dom";
import { useState } from "react";

import toast from "react-hot-toast";

import { subscribeEmail } from "../../api/subscriberApi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    console.log("Subscribe clicked");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      toast.error("Please enter email");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      console.log("Sending:", email);

      const response = await subscribeEmail(email);

      console.log("Response:", response);

      toast.success(response.message);

      setEmail("");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Subscription failed");
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Top Gradient Line */}
      <div className="w-full h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-yellow-400">
              Chandra Enterprises
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Trusted banana export and logistics company providing premium
              quality bananas, cold storage, packaging, and transportation
              services across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919801835063"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li>
                {" "}
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  Home
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  About Us
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="/products"
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  Products
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="/services"
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  Services
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="/gallery"
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  Gallery
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold text-white">Our Services</h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li className="hover:text-yellow-400 transition">
                Banana Wholesale Supply
              </li>

              <li className="hover:text-yellow-400 transition">
                Cold Storage Services
              </li>

              <li className="hover:text-yellow-400 transition">
                Reefer Transportation
              </li>

              <li className="hover:text-yellow-400 transition">
                Packaging & Loading
              </li>

              <li className="hover:text-yellow-400 transition">
                Pan India Logistics
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white">Contact Info</h3>

            <div className="mt-6 space-y-6 text-gray-400">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />

                <p>
                  KHASRA NO.153, RAIPUR ROAD, Nanakpur Banger, Greater Noida
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-400" />

                <a
                  href="tel:+919801835063"
                  className="hover:text-yellow-400 transition"
                >
                  +91 9801835063
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-400" />

                <a
                  href="mailto:ia3055951@gmail.com"
                  className="hover:text-yellow-400 transition"
                >
                  ia3055951@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Subscribe Newsletter
              </h3>

              <p className="mt-3 text-gray-400">
                Get latest banana supply and logistics updates.
              </p>
            </div>

            {/* Input */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white/10 border border-white/10 text-white px-6 py-4 rounded-2xl outline-none w-full sm:w-[320px]"
              />

              <button
                onClick={handleSubscribe}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
              
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2026 Chandra Enterprises. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <p>GST: 09ABCDE1234F1Z5</p>

            <p>FSSAI: 12345678900000</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
