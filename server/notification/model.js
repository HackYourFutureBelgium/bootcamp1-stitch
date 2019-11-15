const mongoose = require('mongoose');

const notificationSchema  = mongoose.Schema(
  {
    dateofnotification:{

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
       
    },

    notifRequestType: {
        type: String, 
        required: true,
       
    }
}

);

module.exports = mongoose.model('notification', notificationSchema);