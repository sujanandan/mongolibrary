const express = require("express");

const booksRouter1 = express.Router();//using express.router class for book router
const bookData=require('../model/bookdata');

//called function
function router(nav){ 
    booksRouter1.get('/',function(req,res){
         bookData.find()
         .then(function(books){
            res.render("book",{
                nav,
                title:'Library Management',
                books   
            });
         })   
    });
    // for book single page
    booksRouter1.get('/:id',function(req,res){
        const id=req.params.id;
        bookData.findOne({_id:id})
        .then(function(book){
        res.render('books',{
        nav,
        title:'Library Management',
        book
        });
    });
});
//deletion
booksRouter1.get('/:id/delete',function(req,res){
    const id=req.params.id;
   bookData.remove({_id:id})
     .then(function(book){
    res.redirect('/book');  
});
});
//updation
booksRouter1.get('/:id/update',function(req,res){
    const id=req.params.id;
    bookData.findOne({_id:id})
    .then(function(book){
    res.render('updatebook',{
    nav,
    title:'Library Management',
   book   
    });
});
});
booksRouter1.post('/:id/update/ok',function(req,res){ 
    var image1="";
    const id=req.params.id;    
    console.log("id"+id)    ;
    if (req.body.image==""){
    
    image1=req.body.imageid;}
    else
    image1=req.body.image;
   var values= bookData.updateOne({_id:req.params.id},{title:req.body.title,
// author:req.body.author,genre:req.body.genre,image:req.body.image},function(err,docs){
// if(err)
// res.json(err)
// else
// res.redirect('/book');
author:req.body.author,genre:req.body.genre,image:image1})
.then(function(book){
     res.redirect('/book');
    
    });  
});
    return booksRouter1;
}
    module.exports=router;

