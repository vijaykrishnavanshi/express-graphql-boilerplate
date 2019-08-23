const { UserController } = require('../../../controllers');

const user_login = async (root, { email, password }) => {
  const user = await UserController.login({ email, password });
  return user;
};

module.exports = user_login;
