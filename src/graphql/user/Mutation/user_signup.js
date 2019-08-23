const user_signup = async (root, { signupForm }, { Controller }) => {
  const { UserController } = Controller;
  const user = await UserController.signup(signupForm);
  return user;
};

module.exports = user_signup;
