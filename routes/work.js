const express=require('express');
const path = require('path');

//创建路由器对象
var router=express.Router();

//添加路由
//默认首页
router.get('/',function(req,res){
	//res.sendfile('public/work.html');
	res.sendFile(path.join(__dirname, '../public', 'work.html'));
});

//ip列表
router.get('/ip',function(req,res){
	res.send("ip列表的网页");
});

//导出路由器对象
module.exports=router;