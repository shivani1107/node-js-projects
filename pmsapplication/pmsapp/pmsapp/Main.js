var express=require('express');
var bodyparser=require('body-parser');
var app = express();
//var cors=require('cors');
app.use(express.json());
app.get("/",(req, res)=>{
    res.send("hello");
});

app.get("/show",(req, res)=>{
    res.send("in Show");
});
app.use(bodyparser.json());
const router=require('./routes/route.js')
app.use('/api',router);
//app.use(cors);
app.listen(3000,()=>{
    console.log("Server started on port 3000");
    console.log("welcome to node express");
});
//http://localhost:3000/api/products--get