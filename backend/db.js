const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:u4aAj4xkj2QZfoap@cluster0.npomqzy.mongodb.net/Expense-management");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password:{
        type:String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    },
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    }
})

const User = mongoose.model("User",userSchema);

module.exports = {User};