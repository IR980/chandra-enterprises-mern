import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Package, Image, MessageSquare, Users, RefreshCw } from "lucide-react";

import { getDashboardStats } from "../../api/dashboardApi";
import InquiryStatusChart from "../../components/dashboard/InquiryStatusChart";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentInquiryTable from "../../components/dashboard/RecentInquiryTable";
import ProductAvailabilityChart from "../../components/dashboard/ProductAvailabilityChart";
import GalleryAnalytics from "../../components/dashboard/GalleryAnalytics";
import SubscriberGrowthChart from "../../components/dashboard/SubscriberGrowthChart";
const Dashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    gallery: 0,
    inquiries: 0,
    subscribers: 0,

    inquiryStatus: {
      pending: 0,
      contacted: 0,
      completed: 0,
    },

    productAvailability: {
      available: 0,
      outOfStock: 0,
      comingSoon: 0,
    },

    galleryAnalytics: {
      images: 0,
      videos: 0,
    },

    subscriberGrowth: [],
  });

  const [loading, setLoading] = useState(true);

  const [lastUpdated, setLastUpdated] = useState("");

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const data = await getDashboardStats();

      setStats({
        products: data.products || 0,
        gallery: data.gallery || 0,
        inquiries: data.inquiries || 0,
        subscribers: data.subscribers || 0,

        inquiryStatus: data.inquiryStatus || {
          pending: 0,
          contacted: 0,
          completed: 0,
        },

        productAvailability: data.productAvailability || {
          available: 0,
          outOfStock: 0,
          comingSoon: 0,
        },

        galleryAnalytics: data.galleryAnalytics || {
          images: 0,
          videos: 0,
        },

        subscriberGrowth: data.subscriberGrowth || [],
      });
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.error(error);

      toast.error("Failed to load dashboard statistics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>

          <p className="text-gray-400 mt-2">
            Welcome to Chandra Enterprises Admin Dashboard 👋
          </p>

          {!loading && (
            <p className="text-sm text-gray-500 mt-2">
              Last Updated : {lastUpdated}
            </p>
          )}
        </div>

        <button
          onClick={fetchDashboard}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white transition disabled:opacity-50"
        >
          <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* ================= STATS ================= */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        <StatCard
          title="Products"
          value={stats.products}
          icon={<Package size={30} className="text-white" />}
          color="bg-blue-600"
          loading={loading}
        />

        <StatCard
          title="Gallery"
          value={stats.gallery}
          icon={<Image size={30} className="text-white" />}
          color="bg-green-600"
          loading={loading}
        />

        <StatCard
          title="Inquiries"
          value={stats.inquiries}
          icon={<MessageSquare size={30} className="text-white" />}
          color="bg-yellow-500"
          loading={loading}
        />

        <StatCard
          title="Subscribers"
          value={stats.subscribers}
          icon={<Users size={30} className="text-white" />}
          color="bg-purple-600"
          loading={loading}
        />
      </div>

      {/* ================= QUICK ACTIONS ================= */}

      <div className="grid lg:grid-cols-2 gap-8">
        <QuickActions />

        <RecentInquiryTable />
      </div>

      {/* ================= ANALYTICS ================= */}

      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        {/* Inquiry Status Chart */}

        <InquiryStatusChart inquiryStatus={stats.inquiryStatus} />

        {/* Product Chart Placeholder */}

        <ProductAvailabilityChart
          productAvailability={stats.productAvailability}
        />
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <GalleryAnalytics galleryAnalytics={stats.galleryAnalytics} />

        <SubscriberGrowthChart subscriberGrowth={stats.subscriberGrowth} />
      </div>
    </div>
  );
};

export default Dashboard;
