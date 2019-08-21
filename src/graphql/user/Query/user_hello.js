const { User } = require('../../../models');

const hello = async () => {
  const user = await User.findOne({})
    .lean()
    .exec();
  console.log(user);
  return 'Hello user!';
};

module.exports = hello;
