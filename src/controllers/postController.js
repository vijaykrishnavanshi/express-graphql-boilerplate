const { Post } = require('../models');

const _postController = {};

_postController.create = async ({ title, body, createdBy }) => {
  const post = new Post({ title, body, createdBy });
  const savedPost = await post.save();
  return savedPost.safeObject();
};

module.exports = _postController;
