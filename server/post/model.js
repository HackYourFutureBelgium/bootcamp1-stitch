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

    dateOfContent:{

        type: String,
        required: false

    },

    dateOfPost:{

        type: Date,        
        default: Date.now


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