const postsResolvers = require("./post");
const usersResolvers = require("./user");
const commentsResolvers = require("./comments");

module.exports = {
  // query data
  Query: {
    ...postsResolvers.Query,
  },
  // add data
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};
