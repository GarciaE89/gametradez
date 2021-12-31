const { Schema, model } = require("mongoose");

const dateFormat = require("../utils/dateFormat");

const productSchema = new Schema(
  {
    productTitle: {
      type: String,
      required: "Your post needs a title!",
      minlength: 1,
      maxlength: 80,
    },
    productDescription: {
      type: String,
      required: "Your post needs a description!",
      minlength: 1,
      maxlength: 280,
    },

    price: {
      type: Number,
      required: true,
      min: 0.99,
    },

    quantity: {
      type: Number,
      min: 1,
      default: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Product = model("Post", productSchema);

module.exports = Product;
