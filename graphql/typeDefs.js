const { gql } = require("apollo-server");

module.exports = gql`
  # for add data like sehema
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  # input data
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  # for Query
  type Query {
    getPosts: [Post]
  }
  # Register user
  type Mutation {
    # {regiter is name of funtion } {RegisterInput is input from} for Data input and {:user is call back}
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;
