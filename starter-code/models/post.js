const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    maxlength: 140,
    minlength: 1
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  picName: {
    type: String,
    required: true
  },
  picPath: [{
    type: mongoose.Types.ObjectId,
    ref: 'Image'
  }]
}, {
  timestamps: {
    createdAt: 'creationDate',
    updatedAt: 'updateDate'
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;