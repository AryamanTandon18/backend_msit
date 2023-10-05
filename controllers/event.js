import  Events  from "../models/event.js";
import { sendCookie } from "../utils/features.js";


export const newEvent=async(req,res)=>{
// const {name,category,description,eventdate,venue,contactDetails} = req.body;

try {
        const {name,category,description,eventdate,venue,contactDetails} = req.body;
    const event = await Events.create({
     name,
     category,
     description,
     eventdate,
     venue,
     contactDetails,
     user:req.user,
    });
res.status(200).json({
    success:true,
    event : event,
    user:req.user,
})
sendCookie(res,user,`event Added, ${user.name}`)
} catch (error) {
    console.log(error.message);
}
}

export const getAllEvents = async(req,res)=>{
   

    const event = Events.find({user:req.user._id})
    res.status(200).json({
        success:true,
        event : event
    })

    
}