const { PostController } = require('../../../controllers');

const post_update = async (root, { postId, postForm }) => {
  const post = await PostController.update(postId, {
    ...postForm,
  });
  return post;
};

module.exports = post_update;
