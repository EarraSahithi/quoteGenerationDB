const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const quoteSchema=new Schema({
    quote:String,
    author:String
},
{ 
    collection  :"moreDetails",
}
);

module.exports=mongoose.model('moreDetails',quoteSchema);