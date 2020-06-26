const express = require('express');
const adminRouter=express.Router();
const bookData=require('../model/bookdata');
// const authorData=require('../model/authordata');

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'Library Management'    
        });
    });

    adminRouter.post('/add',function(req,res){       
        var item={
           title: req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image,
        } 
        var book=bookData(item);
        book.save();
        res.redirect('/book');
// res.send("Hey i am added");
        });  
//Author data add
// adminRouter.get('/authoradd',function(req,res){
//     res.render('addauthor',{
//         nav,
//         title:'Library Management'    
//     });
// });
// adminRouter.post('/addauthor',function(req,res){       
//     var item={
//        name: req.body.name,
//         lang:req.body.lang,
//         desc:req.body.desc,
//         book:req.body.book,
//         image:req.body.image,
//     } 
//     var author=authorData(item);
//     author.save();
//     res.redirect('/author');
// // res.send("Hey i am added");
//     });  
        
return adminRouter;
}
module.exports=router;
