const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userEmail : {
        type : String,
        required : [true, 'userEmail must be provided'] // email aunu paro vanako true
        
    },

    userPhoneNumber : {
        type :Number,
        required :[true, "Phonenumber must be provided"]
    },

    userPassword :{
        type : String,
        required : [true, "Password must be provided"]
    },

    userName : {
        type : String,
        required : [true, "UserName must be provided"]
    },

    role :{
        type : String,
        enum :["customer", "admin"],
        default : "customer"
    }
})

const User = mongoose.model("User",userSchema)
module.exports = User
