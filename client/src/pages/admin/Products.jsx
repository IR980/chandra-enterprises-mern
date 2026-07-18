import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../api/productApi";
import toast from "react-hot-toast";
import ProductTable from "../../components/dashboard/ProductTable";
import ProductModal from "../../components/dashboard/ProductModal";
import DeleteModal from "../../components/dashboard/DeleteModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteProductData, setDeleteProductData] = useState(null);
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Edit Product State
  const [editProduct, setEditProduct] = useState(null);

  const handleDelete = async () => {
    console.log(deleteProductData);
    try {
      await deleteProduct(deleteProductData._id);

      toast.success("Product Deleted Successfully");

      setShowDeleteModal(false);

      setDeleteProductData(null);

      fetchProducts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getAllProducts();

      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Product Management</h1>

          <p className="text-gray-400 mt-2">Manage all banana products.</p>
        </div>

        <button
          onClick={() => {
            setEditProduct(null);
            setShowModal(true);
          }}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
        >
          + Add Product
        </button>
      </div>

      {/* Product Table */}

      <ProductTable
        products={products}
        loading={loading}
        onEdit={(product) => {
          setEditProduct(product);
          setShowModal(true);
        }}
        onDelete={(product) => {
          console.log(product);
          setDeleteProductData(product);
          setShowDeleteModal(true);
        }}
      />

      {/* Product Modal */}

      <ProductModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditProduct(null);
        }}
        refreshProducts={fetchProducts}
        editProduct={editProduct}
      />

      {/* Delete Product Modal */}
      <DeleteModal
        isOpen={showDeleteModal}
        title="Delete Product"
        message={`Are you sure you want to delete "${deleteProductData?.name}"?`}
        onCancel={() => {
          setShowDeleteModal(false);
          setDeleteProductData(null);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Products;
