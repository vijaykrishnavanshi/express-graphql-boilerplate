const { PostController } = require('../../../controllers');

const post_get = async (root, { postId }, { req }) => {
  const { user: loggedInUser } = req;
  const post = await PostController.getPost(postId, loggedInUser._id);
  return post;
};

module.exports = post_get;
