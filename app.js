//importing express into file.
const express=require('express');



// window.$ = window.jQuery = require('jquery'); // not sure if you need this at all
// Bootstrap = require('bootstrap');
//initialize express
const app=new express();

//setting template engine to ejs
app.set('view engine','ejs');
app.set("views","./src/views");
const nav=[
    {link:'/home',name:'HOME',disicon:'fa fa-home'},
    {link:'/book',name:'BOOK',disicon:'fa fa-book'},
    {link:'/author',name:'AUTHOR',disicon:'fa fa-users'},
    {link:'/admin',name:'ADD BOOK',disicon:'fa fa-book'},
    {link:'/authoradd',name:'ADD AUTHOR',disicon:'fa fa-users'}

];

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

//using express.router class for book router
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
const adminRouter1 = require('./src/routes/adminRoutes1')(nav) 

const signupData = require('./src/model/signupdata');
// using bus router,whenever /book is coming it should
app.use('/book',booksRouter); 
app.use('/author',authorRouter);
app.use('/admin',adminRouter);
app.use('/authoradd',adminRouter1);
//creating nav as array of objects

//creation of details as array of objects
const details=[{link:'/book',name:'Book',img:'book.jpg',desc:'This section deals with different kids of books like Kids book , Biographies ,Fiction ,Non-Fiction etc. '},
{link:'/author',name:'Author',img:'author.jpg',desc:'Author section list out books based on its authors.different books of same authors can be found here.'},
{link:'/signup',name:'Registration',img:'regislerlog.jpg',desc:'Register with username and password to access all the features.'}
];

//creating end point/route handler for index
app.get('/',function(req,res){
    res.render('index',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}],
        title:'Library Management'
    });
});
//creating router for login

app.get('/login',function(req,res){
    res.render('login',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}
    ],
        title:'Library Management'
    });
});

app.post('/login/check',function(req,res){
   
var username = req.body.email;
var password = req.body.pwd;

signupData.findOne({email:username,pwd:password},function(err,docs){
    if(docs==null)
    // res.send("no match");
    res.redirect('/login');
    else
    // res.send("matched" +username +password +docs);
    res.redirect('/home');

});
    
})


app.get('/signup',function(req,res){   
   
    res.render('signup',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}
    ],
        title:'Library Management'
    });
});
app.post('/signup/signupadd',function(req,res){
    var item={
        uname:req.body.uname,
        email:req.body.email,
        pwd:req.body.pwd,
        pwd1:req.body.pwd1
    }
    var signup=signupData(item);
    signup.save();
   res.redirect('/login');
    
})
    
app.get('/home',function(req,res){
    res.render('home',
    {
    nav,details,
        title:'Library Management'
    });
});

   //Listen on a port
    app.listen(5000);
    
