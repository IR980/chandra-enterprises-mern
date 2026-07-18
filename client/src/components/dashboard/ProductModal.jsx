import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

import { createProduct, updateProduct } from "../../api/productApi";

const ProductModal = ({ isOpen, onClose, refreshProducts, editProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    bananaType: "",
    weight: "",
    size: "48 x 38 x 24",
    shelfLife: "",
    packagingType: "",
    availability: "Available",
    minimumOrderQuantity: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);


  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =============================
  // Handle Image Upload
  // =============================

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  // =============================
  // Submit Product
  // =============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Only send image if a new one is selected
      if (image) {
        data.append("image", image);
      }

      let response;

      if (editProduct) {
        // UPDATE PRODUCT
        response = await updateProduct(editProduct._id, data);

        toast.success(response.message || "Product Updated Successfully");
      } else {
        // CREATE PRODUCT
        if (!image) {
          toast.error("Please select a product image");
          return;
        }

        response = await createProduct(data);

        toast.success(response.message || "Product Added Successfully");
      }

      // Reset Form
      setFormData({
        name: "",
        bananaType: "",
        weight: "",
        size: "48 x 38 x 24",
        shelfLife: "",
        packagingType: "",
        availability: "Available",
        minimumOrderQuantity: "",
        description: "",
      });

      setImage(null);
      setPreview("");

      refreshProducts();

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          (editProduct ? "Failed to update product" : "Failed to add product"),
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (editProduct) {
      setFormData({
        name: editProduct.name,
        bananaType: editProduct.bananaType,
        weight: editProduct.weight,
        size: editProduct.size,
        shelfLife: editProduct.shelfLife,
        packagingType: editProduct.packagingType,
        availability: editProduct.availability,
        minimumOrderQuantity: editProduct.minimumOrderQuantity,
        description: editProduct.description,
      });

      setPreview(editProduct.image);
      setImage(null);
    } else {
      setFormData({
        name: "",
        bananaType: "",
        weight: "",
        size: "48 x 38 x 24",
        shelfLife: "",
        packagingType: "",
        availability: "Available",
        minimumOrderQuantity: "",
        description: "",
      });

      setPreview("");
      setImage(null);
    }
  }, [editProduct, isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto py-10">
      <div className="bg-slate-900 w-full max-w-3xl rounded-3xl border border-slate-700 shadow-2xl">
        {/* HEADER */}

        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-700">
          <div>
            {/* <h2 className="text-3xl font-bold text-white">Add Product</h2> */}
            <h2 className="text-3xl font-bold text-white">
              {editProduct ? "Edit Product" : "Add Product"}
            </h2>
            <p className="text-gray-400 mt-2">Add a new banana product.</p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex justify-center items-center text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* FORM */}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-white mb-2">Product Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Premium Cavendish Banana"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Banana Type</label>

            <select
              name="bananaType"
              value={formData.bananaType}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
              required
            >
              <option value="">Select Banana Type</option>

              <option>Cavendish Banana</option>

              <option>Raw Banana</option>

              <option>Green Banana</option>

              <option>Premium Banana</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">Weight</label>

              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="13 KG"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Box Size</label>

              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">Shelf Life</label>

              <input
                type="text"
                name="shelfLife"
                value={formData.shelfLife}
                onChange={handleChange}
                placeholder="30 Days"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Packaging Type</label>

              <input
                type="text"
                name="packagingType"
                value={formData.packagingType}
                onChange={handleChange}
                placeholder="Corrugated Box"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">Availability</label>

              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
              >
                <option value="Available">Available</option>

                <option value="Out of Stock">Out of Stock</option>

                <option value="Coming Soon">Coming Soon</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">
                Minimum Order Quantity
              </label>

              <input
                type="text"
                name="minimumOrderQuantity"
                value={formData.minimumOrderQuantity}
                onChange={handleChange}
                placeholder="500 Boxes"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-3">Product Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
            />
          </div>
          {preview && (
            <div>
              <label className="block text-white mb-3">Image Preview</label>

              <img
                src={preview}
                alt="Preview"
                className="w-52 h-52 object-cover rounded-2xl border-2 border-yellow-400"
              />
            </div>
          )}
          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : editProduct
                  ? "Update Product"
                  : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
