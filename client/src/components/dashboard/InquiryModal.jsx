import { FaTimes } from "react-icons/fa";

const InquiryModal = ({ inquiry, onClose, onStatusChange }) => {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-2xl w-full max-w-xl p-8 border border-slate-700">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Inquiry Details</h2>

          <button onClick={onClose} className="text-red-500 hover:text-red-600">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="space-y-5 text-gray-300">
          <p>
            <strong>Name :</strong> {inquiry.name}
          </p>

          <p>
            <strong>Email :</strong> {inquiry.email}
          </p>

          <p>
            <strong>Phone :</strong> {inquiry.phone}
          </p>

          <p>
            <strong>Product :</strong> {inquiry.product || "General Inquiry"}
          </p>

          <p>
            <strong>Message :</strong>
          </p>

          <div className="bg-slate-800 rounded-xl p-4">{inquiry.message}</div>

          <div>
            <label className="text-white block mb-2">Update Status</label>

            <select
              value={inquiry.status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl p-3 w-full text-white"
            >
              <option>Pending</option>

              <option>Contacted</option>

              <option>Completed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
