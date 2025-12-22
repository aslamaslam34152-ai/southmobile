const mongoose=require('mongoose');

const RegisterSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const Registermodel=mongoose.model('Register',RegisterSchema)

module.exports=Registermodel