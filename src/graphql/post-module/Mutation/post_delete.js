const { PostController } = require('../../../controllers');

const post_delete = async (root, { postId, postForm }) => {
  const post = await PostController.update(postId, {
    title: postForm.title,
    body: postForm.body,
  });
  return post;
};

module.exports = post_delete;
