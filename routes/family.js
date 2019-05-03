const express=require('express');
const path=require('path');

//创建路由器对象
var router=express.Router();

//添加路由
//默认首页
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../public','family.html'));
});

//家庭成员列表
router.get('/members',function(req,res){
	res.send("家庭成员列表的网页");
});

router.post('/add', (req, res) => {
    var obj=req.body;
    console.log(obj);
    res.send("姓名:"+obj.uname+"\n性别："+obj.gender);
});

//导出路由器对象
module.exports=router;