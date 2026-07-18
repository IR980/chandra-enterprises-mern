import { useMemo, useState } from "react";
import InquiryStatusBadge from "./InquiryStatusBadge";

import toast from "react-hot-toast";

import InquiryModal from "./InquiryModal";
import DeleteModal from "./DeleteModal";

import { deleteInquiry } from "../../api/inquiryApi";
import { getInquiryById, updateInquiryStatus } from "../../api/inquiryApi";

const InquiryTable = ({
  inquiries = [],
  loading = false,
  removeInquiry,
  updateInquiryInState,
}) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.phone?.includes(search);

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [inquiries, search, statusFilter]);

  const handleView = async (id) => {
    try {
      const data = await getInquiryById(id);

      setSelectedInquiry(data.inquiry);

      setShowModal(true);
    } catch (error) {
      toast.error("Unable to load inquiry");
    }
  };

  const handleStatusChange = async (status) => {
    try {
      const response = await updateInquiryStatus(selectedInquiry._id, status);

      // Update modal
      setSelectedInquiry(response.inquiry);

      // Update table immediately
      if (updateInquiryInState) {
        updateInquiryInState(response.inquiry);
      }

      toast.success(response.message);
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteInquiry(deleteId);

      if (removeInquiry) {
        removeInquiry(deleteId);
      }
      toast.success(response.message);
      setShowDeleteModal(false);
      setDeleteId(null);
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };
  return (
    <>
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Customer Inquiries</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}

            <input
              type="text"
              placeholder="Search name, email or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-yellow-400 w-full sm:w-72"
            />

            {/* Status */}

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Contacted</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 text-left">
                <th className="p-4 text-gray-400">Customer</th>

                <th className="p-4 text-gray-400">Phone</th>

                <th className="p-4 text-gray-400">Email</th>

                <th className="p-4 text-gray-400">Status</th>

                <th className="p-4 text-gray-400">Date</th>

                <th className="p-4 text-gray-400">Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-400">
                    Loading inquiries...
                  </td>
                </tr>
              ) : filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-400">
                    No inquiries found.
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-slate-800 hover:bg-slate-800 transition"
                  >
                    <td className="p-4">
                      <div>
                        <h4 className="text-white font-semibold">
                          {item.name}
                        </h4>

                        <p className="text-gray-500 text-sm mt-1">
                          {item.product || "General Inquiry"}
                        </p>
                      </div>
                    </td>

                    <td className="p-4 text-gray-300">{item.phone}</td>

                    <td className="p-4 text-gray-300">{item.email}</td>

                    <td className="p-4">
                      <InquiryStatusBadge status={item.status} />
                    </td>

                    <td className="p-4 text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(item._id)}
                          className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm text-white"
                        >
                          View
                        </button>

                        <button className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-sm text-white">
                          Status
                        </button>

                        <button
                          onClick={() => {
                            setDeleteId(item._id);
                            setShowDeleteModal(true);
                          }}
                          className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm text-white"
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

        {/* Modal */}
        {showModal && (
          <InquiryModal
            inquiry={selectedInquiry}
            onClose={() => setShowModal(false)}
            onStatusChange={handleStatusChange}
          />
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <DeleteModal
            isOpen={showDeleteModal}
            title="Delete Inquiry"
            message="Are you sure you want to delete this inquiry?"
            onCancel={() => {
              setShowDeleteModal(false);
              setDeleteId(null);
            }}
            onDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};

export default InquiryTable;
