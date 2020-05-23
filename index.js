// Apollo server setup
const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

// * Defs data type
const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

// * Query data
const resolvers = {
  Query: {
    sayHi: () => "Hello World",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Database connection
const mongoose = require("mongoose");
const { URI } = require("./config");
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MonfoDB Conected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server runing at ${res.url}`);
  });
