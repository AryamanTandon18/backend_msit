import mongoose from 'mongoose'
import validator from 'validator'
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"please enter your name"],
        maxLength:[30 , "Name cannot exceed 30 characters "]
     },
     email: {
         type: String,
         unique: true,
         required: true,
         validate:[validator.isEmail,"please enter a valid email"]
     },
     password: {
         type: String, 
         select: false,   //do not give password in mongodb while searching for user
         minLength:[8,"password should be greater than 8 characters"] ,
         required: true,
     },
     avatar:{
        
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        
     },
     role:{
        type:String,
        default:"user"
     },
     resetPasswordToken:String,
     resetPasswordExpire:Date,
     createdAt:{
         type:Date,
         deafault: Date.now,
     },
    
})
export const Users = mongoose.model("user",schema);

