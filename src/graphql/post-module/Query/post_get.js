const { PostController } = require('../../../controllers');

const post_get = async (root, { postId }, { req }) => {
  const { authUser: loggedInUser } = req;
  const post = await PostController.getPost(postId, loggedInUser._id);
  return post;
};

module.exports = post_get;
