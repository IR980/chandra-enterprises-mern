import { useEffect, useState } from "react";
import { getAllInquiries } from "../../api/inquiryApi";

import InquiryTable from "../../components/dashboard/InquiryTable";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoading(true);

      const data = await getAllInquiries();

      setInquiries(data.inquiries);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryInState = (updatedInquiry) => {
    setInquiries((prev) =>
      prev.map((item) =>
        item._id === updatedInquiry._id ? updatedInquiry : item,
      ),
    );
  };

  const removeInquiry = (id) => {
    setInquiries((prev) => prev.filter((item) => item._id !== id));
  };
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Customer Inquiries</h1>

        <p className="text-gray-400 mt-2">Manage all customer inquiries.</p>
      </div>

      <InquiryTable
        inquiries={inquiries}
        loading={loading}
        removeInquiry={removeInquiry}
        updateInquiryInState={updateInquiryInState}
      />
    </div>
  );
};

export default Inquiries;
