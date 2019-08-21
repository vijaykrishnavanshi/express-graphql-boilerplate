const { User } = require('../models');

const _userController = {};

_userController.signup = async ({ name, email, password }) => {
  const user = new User({ name, email, password });
  const savedUser = await user.save();
  return savedUser.toObject();
};

module.exports = _userController;
