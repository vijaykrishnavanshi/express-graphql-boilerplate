const mongoose = require('mongoose');
const { Schema } = mongoose;

const _post = {};

_post.schema = new Schema(
  {
    title: { type: String, required: true },
    post: { type: String, required: true },

    // system generated
    createdAt: { type: Number, required: true },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },

    updatedAt: { type: Number },
  },
  { usePushEach: true },
  { runSettersOnQuery: true },
);

_post.model = mongoose.model('posts', _post.schema);

module.exports = _post;
