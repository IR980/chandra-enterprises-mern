import { useNavigate, useSearchParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Inquiry = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: selectedProduct,
    }));
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.product ||
      !formData.message
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/inquiries",
        formData,
      );

      toast.success(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit inquiry");
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      {" "}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-end">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full hover:bg-red-600 text-white flex items-center justify-center transition"
          >
            <FaTimes />
          </button>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Request Quote
          </h1>

          <p className="text-center text-gray-600 mt-3">
            Fill the form and our team will contact you.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label className="font-medium">Product</label>

              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                placeholder="Product you're interested in"
                className="w-full mt-2 bg-gray-100 border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium">Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium">Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium">Phone Number</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium">Requirement</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-xl font-semibold transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
