const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;

{
  /* <div class="single-post">
    {{#each this.images}}
      <img src={{this.resizedUrl}}>
    {{/each}}
    <p>{{ this.text }}</p>
    <small>{{ this.creationDate }}</small>
    <br />
    <small>{{ this.author.name }}</small>
  </div> */
}