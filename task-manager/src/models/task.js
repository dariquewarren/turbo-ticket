const validator = require('validator')
const mongoose = require('mongoose')


const taskSchema = mongoose.Schema({
    description: {
       type: String,
       required: true,
       trim: true
    },
   completed: {
       type: Boolean,
       required: true,
       default: false
       
       },
   owner: {
      type:  mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
   }
      
   })

const Tasks = mongoose.model('Tasks', taskSchema )

   module.exports = Tasks