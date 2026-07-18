import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getGallery, deleteGalleryMedia } from "../../api/galleryApi";
import GalleryTable from "../../components/dashboard/GalleryTable";
import GalleryModal from "../../components/dashboard/GalleryModal";
import DeleteModal from "../../components/dashboard/DeleteModal";

const GalleryManagement = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editGallery, setEditGallery] = useState(null);
  const [deleteGallery, setDeleteGallery] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const data = await getGallery();

      setGallery(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteGalleryMedia(deleteGallery._id);

      toast.success("Gallery Media Deleted");

      setShowDeleteModal(false);

      setDeleteGallery(null);

      fetchGallery();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Gallery Management</h1>

          <p className="text-gray-400 mt-2">Manage Images & Videos</p>
        </div>

        <button
          onClick={() => {
            setEditGallery(null);
            setShowModal(true);
          }}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
        >
          + Add Media
        </button>
      </div>

      {/* Gallery Table */}
      <GalleryTable
        gallery={gallery}
        loading={loading}
        onEdit={(media) => {
          setEditGallery(media);
          setShowModal(true);
        }}
        onDelete={(media) => {
          setDeleteGallery(media);
          setShowDeleteModal(true);
        }}
      />
      {/* Gallery Modal */}
      <GalleryModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditGallery(null);
        }}
        refreshGallery={fetchGallery}
        editGallery={editGallery}
      />
      {/* Delete Modal */}
      <DeleteModal
        isOpen={showDeleteModal}
        title="Delete Gallery Media"
        message={`Are you sure you want to delete "${deleteGallery?.title}"?`}
        onCancel={() => {
          setShowDeleteModal(false);
          setDeleteGallery(null);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default GalleryManagement;
