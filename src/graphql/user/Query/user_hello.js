const hello = async (root, args, { models }) => {
  const { User } = models;
  const user = await User.findOne({})
    .lean()
    .exec();
  console.log(user);
  return 'Hello user!';
};

module.exports = hello;
