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

export const addGalleryMedia = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    const mediaType = req.file.mimetype.startsWith("video")
      ? "video"
      : "image";

    const gallery = await Gallery.create({
      title,
      category,
      description,
      mediaUrl: req.file.path,
      mediaType,
    });

    res.status(201).json(gallery);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};