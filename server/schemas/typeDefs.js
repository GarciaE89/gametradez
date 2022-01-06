const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    products: [Product]
  }

  type Product {
    _id: ID
    productTitle: String
    productDescription: String
    price: Int
    quantity: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    products(username: String): [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addProduct(
      productTitle: String!
      productDescription: String!
      price: Int!
      quantity: Int!
      createdAt: String!
    ): Product
  }
`;

module.exports = typeDefs;
