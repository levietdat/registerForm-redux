import mongoose from "mongoose";

const {Schema} = mongoose
const user = new Schema({
    id:String,
    email:String,
    username:String,
    password:String,
    confirmPassword:String,
    address:String,
    zipcode:String,
},{timestamps:true});


export const User = mongoose.model('User',user);