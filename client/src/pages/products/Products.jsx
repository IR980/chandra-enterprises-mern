
import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import { motion } from "framer-motion";
import {FaWhatsapp,FaSearch,FaBoxOpen,} from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-24 from-black via-black">

        <div className="absolute top-0 left-0 w-96 h-96 bg-black/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold border border-white/10">
              Our Products
            </div>

            <h1 className="mt-4 text-3xl md:text-3xl font-extrabold leading-tight">

              Premium Banana Supply For Wholesale & Export
            </h1>

            <p className="mt-3 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">

              Chandra Enterprises supplies premium quality bananas with
              reliable packaging, cold storage, and fast logistics support.

            </p>

          </motion.div>

        </div>

      </section>

      {/* SEARCH */}
      <section className="py-2">

        <div className="max-w-7xl mx-auto px-4 lg:px-5">

          <div className="flex justify-center">

            <div className="relative w-full lg:w-[500px]">

              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-5 py-4 outline-none text-white"
              />

            </div>

          </div>

          {/* LOADING */}
          {loading && (
            <div className="text-center mt-10 text-yellow-400 text-xl">
              Loading Products...
            </div>
          )}

          {/* NO PRODUCTS */}
          {!loading && filteredProducts.length === 0 && (
            <div className="text-center mt-20 text-red-400 text-xl">
              No Products Found
            </div>
          )}

          {/* PRODUCT GRID */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProducts.map((product, index) => (

              <motion.div
                key={`${product._id}-${index}`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl"></div>

                <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-3 transition-all duration-500">

                  {/* IMAGE */}
                  <div className="overflow-hidden h-64">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-4">

                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm border border-yellow-500/20">

                      <FaBoxOpen />

                      {product.bananaType}

                    </div>

                    <h3 className="mt-4 text-2xl font-bold">
                      {product.name}
                    </h3>

                    <p className="mt-4 text-gray-400 text-sm">
                      {product.description}
                    </p>

                    <div className="mt-6 space-y-3 text-gray-400">

                      <p>
                        <span className="text-white font-semibold">
                          Weight:
                        </span>{" "}
                        {product.weight}
                      </p>

                      <p>
                        <span className="text-white font-semibold">
                          Size:
                        </span>{" "}
                        {product.size}
                      </p>

                      <p>
                        <span className="text-white font-semibold">
                          Shelf Life:
                        </span>{" "}
                        {product.shelfLife}
                      </p>

                      <p>
                        <span className="text-white font-semibold">
                          Packaging:
                        </span>{" "}
                        {product.packagingType}
                      </p>

                      <p>
                        <span className="text-white font-semibold">
                          MOQ:
                        </span>{" "}
                        {product.minimumOrderQuantity}
                      </p>

                    </div>

                    <div className="mt-5 inline-block bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/20">
                      {product.availability}
                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Products;
