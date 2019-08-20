const mongoose = require('mongoose');
const { Schema } = mongoose;

const _user = {};

_user.schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },

    // system generated
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number },
  },
  { usePushEach: true },
  { runSettersOnQuery: true },
);

_user.model = mongoose.model('users', _user.schema);

module.exports = _user;
