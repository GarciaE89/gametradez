const { AuthenticationError } = require("apollo-server-express");
const { User, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("products");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("products");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")

        .populate("products");
    },
    products: async (parent) => {
      return Product.find(params).sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addProduct: async (parent, args) => {
      console.log("add product triggered");
      const product = await Product.create(...args);

      return product;
    },
  },
};

module.exports = resolvers;
