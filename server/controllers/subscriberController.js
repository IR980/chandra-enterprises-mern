import Subscriber from "../models/Subscriber.js";

export const subscribeEmail = async (req,res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",});
    }

    const exists = await Subscriber.findOne({email,});

    if (exists) {
      return res.status(400).json({
        message: "Email already subscribed",});
    }

    await Subscriber.create({
      email,
    });

    res.status(201).json({
      message:
        "Subscribed successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// admin routes
export const getSubscribers = async (req,res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });

    res.status(200).json({
      subscribers,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete subscriber
export const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        message: "Subscriber not found",
      });
    }

    await Subscriber.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Subscriber deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};