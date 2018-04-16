const fs=require('fs');

const express=require('express');
const hbs=require('hbs');

hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear() + " tatti";

})
hbs.registerHelper('getSum',(a,b)=>{
    return a+b;
})

var app=express();

app.set('view engine','hbs');
app.use((req,res,next)=>{
    var now=new Date().toDateString();
    var log=`${now}:${req.method}.${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log',log+"\n");
    next();
})
app.use(express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.send("my localhost");
})
app.get('/hello',(req,res)=>{
    res.send("yo man");
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        currentYear:new Date().getFullYear(),
        name:'Aditya'
    });
})


app.listen(3000,()=>{
    console.log('The server is running on port 3000');
});