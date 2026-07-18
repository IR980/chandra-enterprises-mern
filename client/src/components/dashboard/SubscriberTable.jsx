import { useMemo, useState } from "react";

const SubscriberTable = ({ subscribers = [], loading, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredSubscribers = useMemo(() => {
    return subscribers.filter((subscriber) =>
      subscriber.email?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [subscribers, search]);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg">
      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between gap-4 p-6 border-b border-slate-800">
        <input
          type="text"
          placeholder="Search subscriber..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 outline-none md:w-80"
        />

        <div className="bg-slate-800 px-5 py-3 rounded-xl text-white font-semibold">
          Total : {filteredSubscribers.length}
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-left text-gray-400">#</th>

              <th className="p-4 text-left text-gray-400">Email Address</th>

              <th className="p-4 text-left text-gray-400">Subscription Date</th>

              <th className="p-4 text-left text-gray-400">Status</th>

              <th className="p-4 text-left text-gray-400">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-400">
                  Loading Subscribers...
                </td>
              </tr>
            ) : filteredSubscribers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-400">
                  No Subscribers Found
                </td>
              </tr>
            ) : (
              filteredSubscribers.map((subscriber, index) => (
                <tr
                  key={subscriber._id}
                  className="border-b border-slate-800 hover:bg-slate-800 transition"
                >
                  <td className="p-4 text-gray-300">{index + 1}</td>

                  <td className="p-4 text-white font-medium">
                    {subscriber.email}
                  </td>

                  <td className="p-4 text-gray-300">
                    {subscriber.createdAt
                      ? new Date(subscriber.createdAt).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="p-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => onDelete(subscriber)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
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

export default SubscriberTable;
