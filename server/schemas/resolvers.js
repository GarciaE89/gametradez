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
    products: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Product.find(params).sort({ createdAt: -1 });
    },
    product: async (parent, { _id }) => {
      return Product.findOne({ _id });
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
      // if (context.user) {
      const product = await Product.create({
        ...args,
        // firstName: context.user.firstName,
      });

      //connects product to user
      // await User.findByIdAndUpdate(
      //   { _id: context.user._id },
      //   { $push: { products: product._id } },
      //   { new: true }
      // );

      return product;
      // }

      // throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
