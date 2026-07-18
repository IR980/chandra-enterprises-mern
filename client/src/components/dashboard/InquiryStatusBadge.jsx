const InquiryStatusBadge = ({ status }) => {
  const colors = {
    Pending: "bg-yellow-500 text-black",
    Contacted: "bg-blue-600 text-white",
    Completed: "bg-green-600 text-white",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        colors[status] || "bg-gray-600 text-white"
      }`}
    >
      {status}
    </span>
  );
};

export default InquiryStatusBadge;