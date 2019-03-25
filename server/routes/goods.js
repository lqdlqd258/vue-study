var express = require('express');//调用express对象
var router = express.Router(); //调用express对象路由
var mongoose = require('mongoose');//需要操作数据库，需要mongoose对象
var Goods = require('../models/goods');//调用我们的模型表
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_vue');
//监听数据库
mongoose.connection.on("connected",function(){
    console.log('MongoDB connected success');
});

mongoose.connection.on("error",function(){
    console.log('MongoDB connected error');
});

mongoose.connection.on("disconnected",function(){
    console.log('MongoDB connected disconnected');
});

//拿到路由，再查询数据库
router.get("/",function(req,res,next){
    Goods.find({},function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            });
        }
    });
});

module.exports = router;//输出