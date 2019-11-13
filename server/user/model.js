const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      select: false
    },

    img: {
      type: String,
    },
    about: {
      type: String,
    },
    status: {
      type: String,
    }
  },

);

module.exports = mongoose.model('user', userSchema);