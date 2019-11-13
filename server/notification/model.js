const mongoose = require('mongoose');

const notificationSchema  = mongoose.Schema(
  {
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
       
    },

    notifRequestType: {
        type: String, 
        required: true,
       
    }
}

);

module.exports = mongoose.model('notification', notificationSchema);