//Accessing Mongoose package
const mongoose=require('mongoose');

//Database Connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const Schema = mongoose.Schema;

const authorSchema=new Schema({
    name:String,
    lang:String,
    desc:String,
    book:String,
    image:String
});

//Model creation
var Authordata=mongoose.model('authordata',authorSchema);

module.exports=Authordata;