const jwt = require('jsonwebtoken');
const config = require('../../config');
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
  let token = jwt.sign(user.safeObject(), config.secret, {
    expiresIn: '24h',
  });
  return { token };
};

module.exports = _userController;
