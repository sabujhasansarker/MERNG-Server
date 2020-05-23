const postsResolvers = require("./post");
const usersResolvers = require("./user");

module.exports = {
  // query data
  Query: {
    ...postsResolvers.Query,
  },
  // add data
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
