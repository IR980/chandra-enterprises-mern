import { useEffect, useState } from "react";
import { getRecentInquiries } from "../../api/inquiryApi";

const RecentInquiryTable = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecentInquiries();

        setInquiries(data.inquiries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Recent Inquiries</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-slate-700">
              <th className="pb-3 text-gray-400">Name</th>

              <th className="pb-3 text-gray-400">Phone</th>

              <th className="pb-3 text-gray-400">Status</th>
            </tr>
          </thead>

          <tbody>
            {inquiries.map((item) => (
              <tr key={item._id} className="border-b border-slate-800">
                <td className="py-4 text-white">{item.name}</td>

                <td className="text-gray-300">{item.phone}</td>

                <td>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentInquiryTable;
