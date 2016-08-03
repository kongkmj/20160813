var mongoose = require('mongoose');

var rule003 ={
  psrule003x:{type:String},
  psrule003y:{type:String},
  rule003x:{type:String},
  rule003y:{type:String},
  range003:{type:String},
  createdAt:{type:Date,default:Date.now},
};

module.exports =rule003;
