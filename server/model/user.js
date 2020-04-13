const validator = require('validator');

const {mongoose} = require('./../db/mongoose');

let UserSchema = new mongoose.Schema({
    fullName :{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        minlength:6,
        validate:{
            validator : validator.isEmail,
            message : '{value} is not valid email'
        }
    },
    password:{
        type: String,
        minlength:6,
        required:true
    }
});

let User = mongoose.model('User',UserSchema);

module.exports ={
    User
};