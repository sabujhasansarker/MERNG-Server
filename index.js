// Apollo server setup
const { ApolloServer, PubSub } = require("apollo-server");

// * Defs data type
const typeDefs = require("./graphql/typeDefs");

// * Query data
const resolvers = require("./graphql/resolvers");

// Subscription
const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

// Database connection
const mongoose = require("mongoose");
const { URI } = require("./config");
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Conected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server runing at ${res.url}`);
  });
