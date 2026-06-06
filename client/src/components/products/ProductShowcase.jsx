import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {FaWhatsapp,FaBoxOpen,FaWeightHanging,FaLeaf,} from "react-icons/fa";

import banana1 from "../../assets/images/banana1.jpg";
import banana2 from "../../assets/images/banana2.jpg";
import banana3 from "../../assets/images/banana3.jpg";

const products = [
  {
    id: 1,
    image: banana1,
    name: "Cavendish Banana",
    weight: "10 KG",
    size: '48" x 38" x 24"',
    shelfLife: "10-14 Days",
    packaging: "Carton Box",
    availability: "Available",
  },

  {
    id: 2,
    image: banana2,
    name: "Raw Banana",
    weight: "12 KG",
    size: '50" x 40" x 24"',
    shelfLife: "7-10 Days",
    packaging: "Export Packaging",
    availability: "Available",
  },

  {
    id: 3,
    image: banana3,
    name: "Export Grade Banana",
    weight: "13 KG",
    size: '52" x 42" x 24"',
    shelfLife: "14 Days",
    packaging: "Premium Carton",
    availability: "In Stock",
  },
];

const ProductShowcase = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-12 bg-linear-to-b from-white to-gray-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Premium Banana Products
          </div>

          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Export Quality Banana
            <span className="text-green-700 block mt-2">Product Showcase</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Chandra Enterprises supplies premium quality bananas with hygienic
            packaging, cold storage support, and fast delivery services across
            India.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="mt-10">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={`${product.id}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white"
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "350px" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Availability */}
                    <div className="absolute top-5 left-5 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {product.availability}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Product Name */}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>

                    {/* Specifications */}
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaWeightHanging className="text-yellow-500" />
                        <span>{product.weight}</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <FaBoxOpen className="text-green-600" />
                        <span>{product.packaging}</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <FaLeaf className="text-lime-600" />
                        <span>{product.shelfLife}</span>
                      </div>
                    </div>

                    {/* Size */}
                    <div className="mt-4 bg-gray-100 rounded-2xl p-4">
                      <p className="text-sm text-gray-500">Packaging Size</p>

                      <h4 className="text-lg font-bold text-gray-900 mt-1">
                        {product.size}
                      </h4>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col gap-4">
                      <button
                        onClick={() =>
                          navigate(
                            `/inquiry?product=${encodeURIComponent(product.name,)}`,)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Request Quote
                      </button>

                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
