const postController = require('../../src/controllers/postController');
const userController = require('../../src/controllers/userController');
// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');

describe('#postController()', async function() {
  context('Create Post', async function() {
    it('success case', async function() {
      const user = await userController.signup({
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      });
      const postData = {
        title: 'Some Post',
        body: 'Some Body',
        createdBy: user._id,
      };
      const createdPost = await postController.create(postData);
      expect(createdPost.title).to.equal(postData.title);
      expect(createdPost.body).to.equal(postData.body);
    });
  });
  context('Update Post', async function() {
    it('success case', async function() {
      const user = await userController.signup({
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      });
      const postData = {
        title: 'Some Post',
        body: 'Some Body',
        createdBy: user._id,
      };
      const createdPost = await postController.create(postData);
      expect(createdPost.title).to.equal(postData.title);
      expect(createdPost.body).to.equal(postData.body);
      const dataToUpdate = { title: 'Hello', body: 'Somerhings' };
      const updatedPost = await postController.update(
        createdPost._id,
        dataToUpdate,
      );
      expect(updatedPost.title).to.equal(dataToUpdate.title);
      expect(updatedPost.body).to.equal(dataToUpdate.body);
    });
  });
  context('Delete Post', async function() {
    it('success case', async function() {
      const user = await userController.signup({
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      });
      const postData = {
        title: 'Some Post',
        body: 'Some Body',
        createdBy: user._id,
      };
      const createdPost = await postController.create(postData);
      expect(createdPost.title).to.equal(postData.title);
      expect(createdPost.body).to.equal(postData.body);
      const deletedPost = await postController.delete(createdPost._id);
      expect(deletedPost.title).to.equal(postData.title);
      expect(deletedPost.body).to.equal(postData.body);
    });
  });
});
