var mongoose = require('mongoose');

var rule004 ={
  psrule004x:{type:String},
  psrule004y:{type:String},
  rule004x:{type:String},
  rule004y:{type:String},
  range004:{type:String},
  createdAt:{type:Date,default:Date.now},
};

module.exports =rule004;
