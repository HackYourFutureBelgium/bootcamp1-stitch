const mongoose = require('mongoose');

const userSchema  = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        default: "NULL"
    },
    password: {
        type: String, 
        default: "NULL"
    },

    img: {
        type: String, 
        default: "NULL"
    },
    about: {
        type: String, 
        default: "NULL"
    },
    status: {
        type: String, 
        default: "NULL"
    }
  },
 

);

module.exports = mongoose.model('user', userSchema);