const validator = require('validator')
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true ,
    useCreateIndex: true
})

/*4. TRIM THE PASSWORD1. SETUP THE FIELD AS A REQUIRED STRING
GOAL: ADD PASSWORD FIELD TO USER


2. ENSURE THE LENGTH IS GREATER THAN 6

3. ENSURE THAT PASSWORD DOESNT COINTAIN'PASSWROD'
5. TEST WQORK

*/
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
                if(value.toLowerCase.includes('password') ){
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
const me = new User({
   name: 'Darique',
   email: 'dwarrennyc@ddw.com    ',
   password: ' ddwpasswordwarren    ',
   age: 32
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!', error)
})



const Tasks = mongoose.model('Tasks', {
 description: {
    type: String,
    required: true
 },
completed: {
    type: Boolean,
    
    }
   
})

// const ddw = new Tasks({
//     description: "master my life",
//     completed: false
// })

// ddw.save().then(()=>{
//     console.log(ddw)
// }).catch(()=>{
//     console.log('error', error)
// })