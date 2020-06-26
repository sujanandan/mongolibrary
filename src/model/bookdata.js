//Accessing Mongoose package
const mongoose=require('mongoose');

//Database Connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const schema = mongoose.Schema;

const bookSchema=new schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

//Model creation
var Bookdata=mongoose.model('bookdata',bookSchema);

module.exports=Bookdata;