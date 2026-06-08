import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import {
  FaTruckMoving,
  FaUsers,
  FaBuilding,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaTruckMoving />,
    number: 500,
    suffix: "+",
    title: "Successful Deliveries",
    color: "from-yellow-400 to-orange-500",
  },

  {
    icon: <FaUsers />,
    number: 120,
    suffix: "+",
    title: "Happy Clients",
    color: "from-green-500 to-emerald-600",
  },

  {
    icon: <FaBuilding />,
    number: 500,
    suffix: "T",
    title: "Cold Storage Capacity",
    color: "from-cyan-500 to-blue-600",
  },
];

const StatsCTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Statistics Section</h1>

          <p className="mt-4 text-gray-300">
            Chandra Enterprises Statistics & CTA Section
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-green-600 p-10 rounded-3xl text-center">
            <h2 className="text-5xl font-bold">150+</h2>
            <p className="mt-4">Deliveries Completed</p>
          </div>

          <div className="bg-yellow-500 p-10 rounded-3xl text-center">
            <h2 className="text-5xl font-bold">120+</h2>
            <p className="mt-4">Happy Clients</p>
          </div>

          <div className="bg-orange-500 p-10 rounded-3xl text-center">
            <h2 className="text-5xl font-bold">100T</h2>
            <p className="mt-4">Cold Storage Capacity</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-white/10 p-10 rounded-3xl text-center">
          <h2 className="text-4xl font-bold">Looking For Banana Supply?</h2>

          <p className="mt-4 text-gray-300">
            Contact Chandra Enterprises for premium banana logistics.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            <a
              href="https://wa.me/919694578476"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold"
            >
              WhatsApp Inquiry
            </a>

            <button
              onClick={() =>navigate("/inquiry")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCTASection;
