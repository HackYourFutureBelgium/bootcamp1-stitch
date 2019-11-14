const mongoose = require('mongoose');

const newLearningSchema  = mongoose.Schema(
  {

    userid:{
       type: String,
       required: true
    },

    topic:{
       type: String,
       required: true

    }

}

);

module.exports = mongoose.model('newLearning', newLearningSchema);