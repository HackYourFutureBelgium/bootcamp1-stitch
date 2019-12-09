const mongoose = require('mongoose');
 
const bcrypt = require ('bcrypt');

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
    },
    isDeleted:{
      type: Boolean,
      default: false
    }
  },

);

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validatePassword = (password) => {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('user', userSchema);