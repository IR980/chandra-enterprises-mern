import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    bananaType: {
      type: String,
      required: true,
    },

    weight: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: "48 x 38 x 24",
    },

    shelfLife: {
      type: String,
      required: true,
    },

    packagingType: {
      type: String,
      required: true,
    },

    availability: {
      type: String,
      default: "Available",
    },

    minimumOrderQuantity: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model(
  "Product",
  productSchema
);

export default Product;
