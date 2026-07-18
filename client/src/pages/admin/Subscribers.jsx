import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getSubscribers, deleteSubscriber } from "../../api/subscriberApi";

import SubscriberTable from "../../components/dashboard/SubscriberTable";
import DeleteModal from "../../components/dashboard/DeleteModal";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);

      const data = await getSubscribers();
      console.log("Subscribers API Response:", data);


      setSubscribers(data.subscribers);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteSubscriber(selectedSubscriber._id);

      toast.success("Subscriber deleted successfully");

      setShowDeleteModal(false);
      setSelectedSubscriber(null);

      fetchSubscribers();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete subscriber",
      );
    }
  };
  console.log("Subscribers:", subscribers);

  return (
    <div>
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Subscriber Management
          </h1>

          <p className="text-gray-400 mt-2">Manage newsletter subscribers.</p>
        </div>

        <div className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
          Total : {subscribers.length}
        </div>
      </div>

      <SubscriberTable
        subscribers={subscribers}
        loading={loading}
        onDelete={(subscriber) => {
          setSelectedSubscriber(subscriber);
          setShowDeleteModal(true);
        }}
      />

      <DeleteModal
        isOpen={showDeleteModal}
        title="Delete Subscriber"
        message={`Are you sure you want to delete "${selectedSubscriber?.email}"?`}
        onCancel={() => {
          setShowDeleteModal(false);
          setSelectedSubscriber(null);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Subscribers;
