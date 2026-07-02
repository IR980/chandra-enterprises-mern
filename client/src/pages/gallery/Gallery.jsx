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
    "Images",
    "Videos",
    ...new Set(images.map((item) => item.category)),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : selectedCategory === "Images"
        ? images.filter((item) => item.mediaType === "image")
        : selectedCategory === "Videos"
          ? images.filter((item) => item.mediaType === "video")
          : images.filter((item) => item.category === selectedCategory);

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
              Explore our farms, warehouses, cold storage, packaging facilities,
              transportation network, and export operations.
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
                onClick={() => setSelectedCategory(category)}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredImages.map((item, index) => {
                const isVideo =
                  (item.mediaType || "").toLowerCase().trim() === "video";

                return (
                  <motion.div
                    key={`${item._id}-${index}`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300"
                  >
                    {/* MEDIA */}
                    <div className="relative">
                      {isVideo ? (
                       
                          <video
                            src={item.mediaUrl}
                            controls
                            controlsList="download"
                            playsInline
                            preload="metadata"
                            className="relative z-30 w-full h-72 object-cover rounded-t-3xl cursor-pointer"
                            style={{ pointerEvents: "auto" }}
                          />
                       
                      ) : (
                        <PhotoView src={item.mediaUrl || item.image}>
                          <img
                            src={item.mediaUrl || item.image}
                            alt={item.title}
                            className="w-full h-72 object-cover cursor-pointer transition-transform duration-700 hover:scale-110"
                          />
                        </PhotoView>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <span className="inline-flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        {item.category}
                      </span>

                      <h3 className="mt-4 text-xl font-bold text-white line-clamp-2">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {isVideo ? "Video" : "Image"}
                        </span>

                        {isVideo && (
                          <span className="text-green-400 text-sm font-medium">
                            ▶ Play
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
              Chandra Enterprises provides premium quality banana supply, cold
              storage facilities, and transportation services across India.
            </p>

            <div className="flex justify-center mt-10">
              <a
                href="https://wa.me/919694578476"
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
