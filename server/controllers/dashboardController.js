import Product from "../models/Product.js";
import Gallery from "../models/Gallery.js";
import Inquiry from "../models/Inquiry.js";
import Subscriber from "../models/Subscriber.js";

export const getDashboardStats = async (req, res) => {
  try {
    // ===============================
    // Total Counts
    // ===============================

    const [totalProducts, totalGallery, totalInquiries, totalSubscribers] =
      await Promise.all([
        Product.countDocuments(),
        Gallery.countDocuments(),
        Inquiry.countDocuments(),
        Subscriber.countDocuments(),
      ]);

    // ===============================
    // Product Analytics
    // ===============================

    const availableProducts = await Product.countDocuments({
      availability: "Available",
    });

    const outOfStockProducts = await Product.countDocuments({
      availability: "Out of Stock",
    });

    const comingSoonProducts = await Product.countDocuments({
      availability: "Coming Soon",
    });

    // ===============================
    // Gallery Analytics
    // ===============================

    const imageCount = await Gallery.countDocuments({
      mediaType: "image",
    });

    const videoCount = await Gallery.countDocuments({
      mediaType: "video",
    });

    // ===============================
    // Inquiry Analytics
    // ===============================

    const pendingInquiry = await Inquiry.countDocuments({
      status: "Pending",
    });

    const contactedInquiry = await Inquiry.countDocuments({
      status: "Contacted",
    });

    const completedInquiry = await Inquiry.countDocuments({
      status: "Completed",
    });

    // ===============================
    // Response
    // ===============================
    // ===============================
    // Subscriber Growth (Last 6 Months)
    // ===============================

    const subscriberGrowth = await Subscriber.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
    ]);

    const monthNames = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const subscriberGrowthData = subscriberGrowth.map((item) => ({
      month: monthNames[item._id.month],
      subscribers: item.count,
    }));

    res.status(200).json({
      products: totalProducts,
      gallery: totalGallery,
      inquiries: totalInquiries,
      subscribers: totalSubscribers,

      productAvailability: {
        available: availableProducts,
        outOfStock: outOfStockProducts,
        comingSoon: comingSoonProducts,
      },

      galleryAnalytics: {
        images: imageCount,
        videos: videoCount,
      },

      inquiryStatus: {
        pending: pendingInquiry,
        contacted: contactedInquiry,
        completed: completedInquiry,
      },
      subscriberGrowth: subscriberGrowthData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
