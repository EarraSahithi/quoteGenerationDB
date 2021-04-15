const express=require('express');
const router=express.Router();
const url= require("url");
const http= require("http");
const quoteSchema=require('../models/info');
router.post('/add',function(req,res){
    console.log(req.body);
    const quoteData = new quoteSchema(req.body);
    quoteData.save(function(err){
        if(err){
            console.log("error occured",err);
        }else{
           console.log("Data saved successfully");
           res.send({"result":"success"});
        }
    });
});

/*router.get("/getAll", function (req, res) {
    quoteSchema.find({}, //if empty all will be shown orelse the mentioned name 
    { _id:0 , __v:0 ,data:0},   //to remove id and v
    function (err, data) {
        if (err) {
            console.log("error ocurred", err);
          } else {
            res.send(data);
        }
    });
});
*/


module.exports=router;