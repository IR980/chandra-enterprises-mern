import { useMemo, useState } from "react";

const ProductTable = ({ products = [], loading, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");
  const [bananaType, setBananaType] = useState("All");

  // Categories from bananaType
  const bananaTypes = [
    "All",
    ...new Set(products.map((item) => item.bananaType).filter(Boolean)),
  ];

  // Search + Filter
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        bananaType === "All" || item.bananaType === bananaType;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, bananaType]);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg">
      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between gap-4 p-6 border-b border-slate-800">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 outline-none md:w-80"
        />

        <select
          value={bananaType}
          onChange={(e) => setBananaType(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700"
        >
          {bananaTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-left text-gray-400">Image</th>

              <th className="p-4 text-left text-gray-400">Product</th>

              <th className="p-4 text-left text-gray-400">Banana Type</th>

              <th className="p-4 text-left text-gray-400">Weight</th>

              <th className="p-4 text-left text-gray-400">MOQ</th>

              <th className="p-4 text-left text-gray-400">Availability</th>

              <th className="p-4 text-left text-gray-400">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400">
                  Loading Products...
                </td>
              </tr>
            ) : filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400">
                  No Products Found
                </td>
              </tr>
            ) : (
              filteredProducts.map((product, index) => (
                <tr
                  key={product._id || index}
                  className="border-b border-slate-800 hover:bg-slate-800 transition"
                >
                  <td className="p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-700"
                    />
                  </td>

                  <td className="p-4">
                    <h3 className="text-white font-semibold">{product.name}</h3>

                    <p className="text-sm text-gray-400 line-clamp-2">
                      {product.description}
                    </p>
                  </td>

                  <td className="p-4 text-gray-300">{product.bananaType}</td>

                  <td className="p-4 text-gray-300">{product.weight}</td>

                  <td className="p-4 text-gray-300">
                    {product.minimumOrderQuantity}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        product.availability === "Available"
                          ? "bg-green-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {product.availability}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">

                      <button
                        onClick={() => onEdit(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(product)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ProductTable;
