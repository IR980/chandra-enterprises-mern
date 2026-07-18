import Gallery from "../models/Gallery.js";

// GET ALL IMAGES
export const getGalleryImages = async (req, res) => {
  try {
    const images = await Gallery.find();

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

    const mediaType = req.file.mimetype.startsWith("video") ? "video" : "image";

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

// admin update gallery media
export const updateGalleryMedia = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        message: "Gallery media not found",
      });
    }

    // Update text fields
    gallery.title = title;
    gallery.category = category;
    gallery.description = description;

    // Only update media if a new file is uploaded
    if (req.file) {
      gallery.mediaUrl = req.file.path;

      gallery.mediaType = req.file.mimetype.startsWith("video")
        ? "video"
        : "image";
    }

    await gallery.save();

    res.status(200).json({
      message: "Gallery updated successfully",
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// admin delete gallery media
// DELETE GALLERY MEDIA
export const deleteGalleryMedia = async (req, res) => {
  try {
    const media = await Gallery.findById(req.params.id);

    if (!media) {
      return res.status(404).json({
        message: "Gallery media not found",
      });
    }

    await Gallery.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Gallery media deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
