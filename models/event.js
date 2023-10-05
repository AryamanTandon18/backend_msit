import mongoose from 'mongoose'


const eventSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    name: {
        type: String,
        required:true,
     },
     category: {
         type: String,
         required: true,
    
     },
     description: {
         type: String, 
         required: true,
     },
     eventdate:{
        type:Date,
        require:true,
     },
     venue:{
       type:String,
       required:true,
     },
     contactDetails:{
        type:String,
        required:true
     },
     createdAt:{
         type:Date,
         deafault: Date.now,
     },
    
})
const Events = mongoose.model("event",eventSchema);
export default Events
// module.exports = mongoose.model('event', eventSchema)

