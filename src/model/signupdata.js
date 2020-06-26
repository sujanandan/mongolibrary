//Accessing Mongoose package
const mongoose=require('mongoose');

//Database Connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const schema = mongoose.Schema;

const signupSchema=new schema({
    uname:String,
    email:String,
    pwd:String,
    pwd1:String
});

//Model creation
var Signupdata=mongoose.model('signupdata',signupSchema);

module.exports=Signupdata;