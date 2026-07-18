import { useMemo, useState } from "react";

const GalleryTable = ({ gallery = [], loading, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mediaType, setMediaType] = useState("All");

  const categories = [
    "All",
    ...new Set(gallery.map((item) => item.category).filter(Boolean)),
  ];

  const filteredGallery = useMemo(() => {
    return gallery.filter((item) => {
      const matchesSearch = item.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "All" || item.category === category;

      const matchesType =
        mediaType === "All" || item.mediaType === mediaType.toLowerCase();

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [gallery, search, category, mediaType]);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg">
      {/* Filters */}

      <div className="flex flex-col lg:flex-row gap-4 p-6 border-b border-slate-800">
        <input
          type="text"
          placeholder="Search Gallery..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 lg:w-80"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700"
        >
          <option value="All">All</option>
          <option value="Image">Image</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-left text-gray-400">Preview</th>

              <th className="p-4 text-left text-gray-400">Title</th>

              <th className="p-4 text-left text-gray-400">Category</th>

              <th className="p-4 text-left text-gray-400">Type</th>

              <th className="p-4 text-left text-gray-400">Description</th>

              <th className="p-4 text-left text-gray-400">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  Loading Gallery...
                </td>
              </tr>
            ) : filteredGallery.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  No Gallery Media Found
                </td>
              </tr>
            ) : (
              filteredGallery.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-slate-800 hover:bg-slate-800"
                >
                  <td className="p-4">
                    {item.mediaType === "image" ? (
                      <img
                        src={item.mediaUrl}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                    ) : (
                      <video
                        src={item.mediaUrl}
                        className="w-20 h-20 rounded-xl object-cover"
                        muted
                      />
                    )}
                  </td>

                  <td className="p-4 text-white font-semibold">{item.title}</td>

                  <td className="p-4 text-gray-300">{item.category}</td>

                  <td className="p-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {item.mediaType}
                    </span>
                  </td>

                  <td className="p-4 text-gray-400">{item.description}</td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEdit(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(item)}
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

export default GalleryTable;
