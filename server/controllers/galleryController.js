import Gallery from "../models/Gallery.js";


// GET ALL IMAGES
export const getGalleryImages = async (req,res) => {
  try {

    const images =
      await Gallery.find();

    res.status(200).json(images);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};