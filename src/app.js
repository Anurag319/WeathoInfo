const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
var hbs = require('hbs');

const staticPath = path.join(__dirname,'../public');

//set view engine
const viewPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs'); //it uses render instead of send
app.set('views',viewPath);
hbs.registerPartials(partialsPath);

// my this app want to use static website
app.use(express.static(staticPath));

app.get("",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg : 'Oops page not found'
    });
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})