const { User } = require('../models');

const _userController = {};

_userController.signup = async ({ name, email, password }) => {
  const user = new User({ name, email, password });
  const savedUser = await user.save();
  return savedUser.toObject();
};

_userController.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  const isCorrect = user.comparePassword(password);
  if (!isCorrect) {
    throw new Error('Worng password!');
  }
  return user.safeObject();
};

module.exports = _userController;
