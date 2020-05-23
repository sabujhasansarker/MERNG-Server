const postsResolvers = require("./post");
const usersResolvers = require("./user");
const commentsResolvers = require("./comments");

module.exports = {
  // modifi
  Post: {
    likeCount(parent) {
      return parent.likes.length;
    },
    commentCount(parent) {
      return parent.comments.length;
    },
  },
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
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
