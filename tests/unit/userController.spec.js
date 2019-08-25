const userController = require('../../src/controllers/userController');
// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');

describe('#userController()', function() {
  context('signup', function() {
    it('success case', async function() {
      const userData = {
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      };
      const createdUser = await userController.signup(userData);
      expect(createdUser.name).to.equal(userData.name);
      expect(createdUser.email).to.equal(userData.email);
    });
  });
  context('log in', function() {
    it('success case', async function() {
      const userData = {
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      };
      const createdUser = await userController.signup(userData);
      expect(createdUser.name).to.equal(userData.name);
      expect(createdUser.email).to.equal(userData.email);
      const { token, user } = await userController.login({
        email: userData.email,
        password: userData.password,
      });
      expect(createdUser.name).to.equal(user.name);
      expect(createdUser.email).to.equal(user.email);
      expect(token).to.not.be.null;
    });
  });
});
