const { PostController } = require('../../../controllers');

const post_delete = async (root, { postId }) => {
  const post = await PostController.delete(postId);
  return post;
};

module.exports = post_delete;
