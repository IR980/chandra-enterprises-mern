import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

import { createGalleryMedia, updateGalleryMedia } from "../../api/galleryApi";

const GalleryModal = ({ isOpen, onClose, refreshGallery, editGallery }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [media, setMedia] = useState(null);

  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);

  // ==========================
  // Populate Form (Edit Mode)
  // ==========================

  useEffect(() => {
    if (editGallery) {
      setFormData({
        title: editGallery.title,
        category: editGallery.category,
        description: editGallery.description,
      });

      setPreview(editGallery.mediaUrl);

      setMedia(null);
    } else {
      setFormData({
        title: "",
        category: "",
        description: "",
      });

      setPreview("");

      setMedia(null);
    }
  }, [editGallery, isOpen]);

  if (!isOpen) return null;

  // ==========================
  // Input Change
  // ==========================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("description", formData.description);

      if (media) {
        data.append("media", media);
      }

      let response;

      if (editGallery) {
        response = await updateGalleryMedia(editGallery._id, data);

        toast.success(response.message || "Gallery Updated Successfully");
      } else {
        if (!media) {
          toast.error("Please select a file");
          return;
        }

        response = await createGalleryMedia(data);

        toast.success(response.message || "Media Uploaded Successfully");
      }

      refreshGallery();

      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || "Upload Failed");
    } finally {
      setLoading(false);
    }
  };
  // ==========================
  // Media Upload
  // ==========================

  const handleMediaChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setMedia(file);

    setPreview(URL.createObjectURL(file));
  };
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto py-10">
      <div className="bg-slate-900 w-full max-w-3xl rounded-3xl border border-slate-700 shadow-2xl">
        {/* Header */}

        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-700">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {editGallery ? "Edit Gallery Media" : "Add Gallery Media"}
            </h2>

            <p className="text-gray-400 mt-2">
              Upload images and videos for your gallery.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex justify-center items-center text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-white mb-2">Media Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Banana Loading Process"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
              required
            >
              <option value="">Select Category</option>

              <option>Farm</option>

              <option>Logistics</option>

              <option>Cold Storage</option>

              <option>Packaging</option>

              <option>Transportation</option>

              <option>Export</option>

              <option>Warehouse</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter media description..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-3">
              Upload Image / Video
            </label>

            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          {preview && (
            <div>
              <label className="block text-white mb-3">Preview</label>

              {media?.type?.startsWith("video") ||
              (!media && editGallery?.mediaType === "video") ? (
                <video
                  src={preview}
                  controls
                  className="w-full max-w-md rounded-2xl border-2 border-yellow-400"
                />
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-w-md rounded-2xl border-2 border-yellow-400"
                />
              )}
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
                ? "Uploading..."
                : editGallery
                  ? "Update Media"
                  : "Upload Media"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryModal;
