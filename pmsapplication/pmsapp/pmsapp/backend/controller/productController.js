var sql=require('mysql');
var express=require('express');
var bodyparser=require('body-parser');
var con=sql.createConnection({
    host:"localhost",
    user:"Shivani Pareta",
    password:"root",
    database:"productdb"
});

exports.getProducts=(req, res, next)=>{
    let sql="select * from products";
    let query=con.query(sql, (err,results)=>{
        if(err) throw err;
   //   res.send(JSON.stringify({status:200, error:null,response:results}));
      res.send(results);
    });
};


exports.addProducts=(req,res,next)=>{
    let data={id:req.body.id,name:req.body.name,price:req.body.price};
    let mysql="insert into products SET ?";
    let query=con.query(mysql,data,(err,results)=>{
    console.log("record added");
    if(err) throw err;
    res.send(JSON.stringify({status:200,error:null,response:results}));
    });
    };
    
    
    exports.updateProducts=(req,res)=>{
    //let data={pid:req.body.pid,name:req.body.name,price:req.body.name};
    let mysql="update products set name='"+req.body.name+"',price='"+req.body.price+"' where id="+req.param('id');
    let query=con.query(mysql,(err,results)=>{
    console.log("record updated");
    if(err) throw err;
    res.send(JSON.stringify({status:200,error:null,response:results}));
    });
    };
    
        
    exports.deleteProduct=(req,res)=>{
    let mysql="delete from products where id="+req.param('id');
    let query=con.query(mysql,(err,results)=>{
    console.log("record deleted");
    if(err) throw err;
    res.send(JSON.stringify({status:200,error:null,response:results}));
    });
    };
    
    