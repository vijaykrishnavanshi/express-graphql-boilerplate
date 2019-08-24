const { Post } = require('../models');

const _postController = {};

_postController.create = async ({ title, body, createdBy }) => {
  const post = new Post({ title, body, createdBy });
  await post.save();
  return post.toObject();
};

_postController.update = async (postId, { title, body }) => {
  const post = await Post.findById(postId);
  post.title = title || post.title;
  post.body = body || post.body;
  await post.save();
  return post.toObject();
};

_postController.delete = async postId => {
  const post = await Post.findById(postId);
  await Post.deleteOne({ _id: postId });
  return post.safeObject();
};

_postController.getPost = async (postId, createdBy) => {
  const post = await Post.findOne({ _id: postId, createdBy });
  if (!post) {
    throw new Error('Post not found !');
  }
  return post.safeObject();
};

_postController.getPostList = async createdBy => {
  const posts = await Post.find({ createdBy });
  if (!posts) {
    throw new Error('Post not found !');
  }
  return posts.map(elem => elem.safeObject());
};

module.exports = _postController;
