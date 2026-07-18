const DeleteModal = ({ isOpen, title, message, onCancel, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-slate-900 rounded-2xl w-full max-w-md p-8 border border-slate-700">
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        <p className="text-gray-400 mt-4">{message}</p>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-white"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
