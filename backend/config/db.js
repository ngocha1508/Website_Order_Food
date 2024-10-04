import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://haduongngoc150803:Ha123456789@cluster0.nyr8qnq.mongodb.net/web_order_food').then(()=>console.log("DB Connected"));
}