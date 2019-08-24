/* test/sum.js */
const postController = require('../../src/controllers/postController');
const userController = require('../../src/controllers/userController');
const { expect } = require('chai');

describe('#postController()', function() {
  context('', function() {
    it('should return 0', async function() {
      const user = await userController.signup({
        name: 'Test',
        email: 'test@example.com',
        password: '12345',
      });
      const postData = {
        title: 'Some Post',
        body: 'Some Body',
        createdBy: user._id,
      };
      const createdPost = await postController.create();
      expect(createdPost.title).to.equal(postData.title);
      expect(createdPost.body).to.equal(postData.body);
    });
  });
});
