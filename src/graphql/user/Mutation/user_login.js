const { UserController } = require('../../../controllers');

const user_login = async (root, { email, password }) => {
  console.log(email, password);
  const { token } = await UserController.login({ email, password });
  return { token };
};

module.exports = user_login;
