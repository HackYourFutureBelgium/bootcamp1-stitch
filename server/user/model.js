const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    
    picture: {
      type: String
    },
    password: {
      type: String,
      select: false
    },
    passwordResetToken: {
      type: String,
      select: false
    },
    accountConfirmationToken: {
      type: String,
      select: false
    },
    email: {
      required: true,
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

User.index({
  firstName: 'text',
  lastName: 'text', 
  password: 'text'
});

module.exports = mongoose.model('User', User);
