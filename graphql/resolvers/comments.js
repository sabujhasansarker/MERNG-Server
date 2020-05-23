const { UserInputError, AuthenticationError } = require("apollo-server");

const Post = require("../../models/Post");

const checkAuth = require("../../utils/check-auth");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuth(context);
      if (!body) {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not empty",
          },
        });
      }
      try {
        let post = null;
        post = await Post.findById(postId);
        console.log(post);
        if (post) {
          post.comments.unshift({
            body,
            username,
            createdAt: new Date().toISOString(),
          });
          await post.save();
          return post;
        } else throw new UserInputError("Post not found");
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteComment(_, { postId, commentId }, context) {
      const { username } = checkAuth(context);
      const post = await Post.findById(postId);
      if (post) {
        const commentIndex = post.comments.find((c) => c.id === commentId);
        console.log(commentIndex);
        if (commentIndex.username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError("Action not allow");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
