import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { getGalleryImages } from "../../api/galleryApi";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } catch (error) {
        console.error("Gallery Fetch Error:", error);
      }
    };

    fetchImages();
  }, []);

  const categories = [
    "All",
    ...new Set(images.map((item) => item.category)),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-24 via-black">

        <div className="absolute top-0 left-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black-500/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-white/10 px-5 py-2 rounded-full text-yellow-400 text-sm font-semibold border border-white/10">
              Our Gallery
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Banana Export & Logistics Showcase
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              Explore our farms, warehouses, cold storage,
              packaging facilities, transportation network,
              and export operations.
            </p>
          </motion.div>

        </div>

      </section>

      {/* FILTER BUTTONS */}
      <section className="py-4">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* GALLERY GRID */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <PhotoProvider>

            <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">

              {filteredImages.map((item, index) => (
                <motion.div
                  key={`${item._id}-${index}`}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl break-inside-avoid"
                >

                  <PhotoView src={item.image}>

                    <div className="cursor-pointer relative overflow-hidden rounded-3xl">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover rounded-3xl group-hover:scale-110 transition-all duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">

                        <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-500">

                          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                            {item.category}
                          </div>

                          <h3 className="mt-4 text-2xl font-bold">
                            {item.title}
                          </h3>

                          {item.description && (
                            <p className="mt-2 text-sm text-gray-300">
                              {item.description}
                            </p>
                          )}

                        </div>

                      </div>

                    </div>

                  </PhotoView>

                </motion.div>
              ))}

            </div>

          </PhotoProvider>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-12 bg-gradient-to-br from-green-400 via-green to-green-400">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-extrabold leading-tight">

              Looking For Trusted Banana
              <span className="block text-yellow-400 mt-3">
                Supply & Logistics Partner?
              </span>

            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed">

              Chandra Enterprises provides premium quality banana supply,
              cold storage facilities, and transportation services across India.

            </p>

            <div className="flex justify-center mt-10">

              <a
                href="https://wa.me/919801835063"
                target="_blank"
                rel="noreferrer"
                className="bg-green-900 hover:bg-green-700 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
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

export default Gallery;