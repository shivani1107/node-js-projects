var sql=require('mysql');
var express=require('express');
var bodyparser=require('body-parser');
var con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"testdb"
});

exports.getUsers=(req, res, next)=>{
    let sql="select * from users";
    let query=con.query(sql, (err,results)=>{
        if(err) throw err;
   //   res.send(JSON.stringify({status:200, error:null,response:results}));
      res.send(results);
    });
};


exports.addUsers=(req,res,next)=>{
    let data={id:req.body.id,name:req.body.name,price:req.body.price};
    let mysql="insert into users SET ?";
    let query=con.query(mysql,data,(err,results)=>{
    console.log("record added");
    if(err) throw err;
    res.send(JSON.stringify({status:200,error:null,response:results}));
    });
    };
    
    
    exports.updateUser=(req,res)=>{
    //let data={pid:req.body.pid,name:req.body.name,price:req.body.name};
    let mysql="update users set name='"+req.body.name+"',price='"+req.body.price+"' where id="+req.param('id');
    let query=con.query(mysql,(err,results)=>{
    console.log("record updated");
    if(err) throw err;
    res.send(JSON.stringify({status:200,error:null,response:results}));
    });
    };
    
        
    exports.deleteUser=(req,res)=>{
    let mysql="delete from users where id="+req.param('id');
    let query=con.query(mysql,(err,results)=>{
    console.log("record deleted");
    if(err) throw err;
    res.send(JSON.stringify({status:200,error:null,response:results}));
    });
    };
    
    