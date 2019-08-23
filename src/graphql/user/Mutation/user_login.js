const { UserController } = require('../../../controllers');

const user_login = async (root, { email, password }) => {
  const { token, user } = await UserController.login({ email, password });
  return { token, user };
};

module.exports = user_login;
