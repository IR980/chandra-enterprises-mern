import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaStar, FaQuoteRight } from "react-icons/fa";

import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";

const testimonials = [
  {
    id: 1,
    image: client1,
    name: "Rajesh Kumar",
    company: "Fresh Mart Distributors",
    review:
      "Chandra Enterprises consistently delivers premium quality bananas with reliable logistics support and hygienic packaging.",
  },

  {
    id: 2,
    image: client2,
    name: "Amit Sharma",
    company: "National Fruit Traders",
    review:
      "Excellent cold storage infrastructure and fast transportation services. Very professional export company.",
  },

  {
    id: 3,
    image: client3,
    name: "Vikram Singh",
    company: "Retail Supply Chain",
    review:
      "Highly trusted wholesale banana supplier with excellent customer support and timely delivery services.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-12 bg-linear-to-b from-gray-950 to-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <div className="inline-block bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-yellow-500/20">
            Client Testimonials
          </div>

          <h2 className="text-3xl md:text-3xl font-extrabold text-white leading-tight">
            Trusted By Distributors &
            <span className="text-green-400 block mt-2">
              Wholesale Buyers
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Chandra Enterprises has earned trust through reliable banana
            supply, cold storage infrastructure, and fast delivery services.
          </p>

        </motion.div>

        {/* Slider */}
        <div className="mt-10">

          <Swiper
            spaceBetween={20}
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

            {testimonials.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="group relative h-full"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-green-500 to-yellow-500 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl"></div>

                  {/* Card */}
                  <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-yellow-400 text-4xl opacity-20">
                      <FaQuoteRight />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    {/* Review */}
                    <p className="mt-6 text-gray-300 leading-relaxed">
                      "{item.review}"
                    </p>

                    {/* Client Info */}
                    <div className="mt-8 flex items-center gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                      />

                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {item.name}
                        </h4>

                        <p className="text-gray-400 text-sm">
                          {item.company}
                        </p>
                      </div>

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

export default TestimonialsSection;
