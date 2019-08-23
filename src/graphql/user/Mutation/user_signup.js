const { UserController } = require('../../../controllers');

const user_signup = async (root, { signupForm }) => {
  await UserController.signup(signupForm);
  const { token } = await UserController.login({
    email: signupForm.email,
    password: signupForm.password,
  });
  return { token };
};

module.exports = user_signup;
