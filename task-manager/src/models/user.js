const validator = require('validator')
const mongoose = require('mongoose')



const User = mongoose.model('User', {
    name: {

        type: String,
        required: true,
        trim: true
        } ,
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value){
                if (!validator.isEmail(value)){
throw new Error('Invalid Email')
                }
                
            }
        },
        password: {
            type: String,
            trim: true,
            minlength: 6,
            required: true,
            validate(value){
                if(value.toLowerCase().includes('password') ){
                    throw new Error('Must be more than 6 characters and cannot conytain thwe word password')
                }
            }
        },
        age: {
            type: Number,
            default: 0,
            validate (value) {
                if (value < 0){
                    throw new Error('age must be positive number')
                }      
        },
       
        }
})


module.exports = User