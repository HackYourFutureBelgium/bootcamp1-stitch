const mongoose = require('mongoose');

const postSchema  = mongoose.Schema(
  {

    skill:{

       type: String,
       required: true
    },

    title:{

       type: String,
       required: true

    },

    url:{
        type: String,
        required: false

    },

    desc:{

        type: String,
        required: false

    },

    date:{

        type: String,
        required: false

    },

    receiverid: {

         type: String,
         required: true
    },

    senderid: {
        type: String, 
        required: true,
       
    }
}

);

module.exports = mongoose.model('post', postSchema);