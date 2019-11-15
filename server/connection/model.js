const mongoose = require('mongoose');

const connectionSchema  = mongoose.Schema(
  {

    userid:{
       type: String,
       required: true
    },

    otheruserid:{
       type: String,
       required: true

    },
    connectionstatus:{

        type: Boolean
    }

}

);

module.exports = mongoose.model('connection', connectionSchema);