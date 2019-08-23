const { Post } = require('../models');

const _postController = {};

_postController.create = async ({ title, body, createdBy }) => {
  const post = new Post({ title, body, createdBy });
  const savedPost = await post.save();
  return savedPost.safeObject();
};

_postController.update = async (postId, { title, body }) => {
  const post = await Post.findById(postId);
  post.title = title || post.title;
  post.body = body || post.body;
  const savedPost = await post.save();
  return savedPost.safeObject();
};

_postController.delete = async postId => {
  const post = await Post.findById(postId);
  await Post.deleteOne({ _id: postId });
  return post.safeObject();
};

module.exports = _postController;
