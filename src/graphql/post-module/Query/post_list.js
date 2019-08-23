const { PostController } = require('../../../controllers');

const post_list = async (root, args, { req }) => {
  const { user: loggedInUser } = req;
  const posts = await PostController.getPostList(loggedInUser._id);
  return posts || [];
};

module.exports = post_list;
