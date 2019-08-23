const { UserController } = require('../../../controllers');

const user_signup = async (root, { signupForm }) => {
  const user = await UserController.signup(signupForm);
  return user;
};

module.exports = user_signup;
