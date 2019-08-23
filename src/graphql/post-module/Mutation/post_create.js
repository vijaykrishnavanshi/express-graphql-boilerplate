const { PostController } = require('../../../controllers');

const post_create = async (root, { postForm }, { req }) => {
  const { user: loggedInUser } = req;
  const post = await PostController.create({
    title: postForm.title,
    body: postForm.body,
    createdBy: loggedInUser._id,
  });
  return post;
};

module.exports = post_create;
