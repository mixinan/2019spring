const express = require('express');
const server=express();

const workRouter=require('./routes/work.js');
const familyRouter=require('./routes/family.js');
const bodyParser=require('body-parser');

server.listen(8080);

//使用body-parser中间件，将post请求的数据格式化为对象
server.use( bodyParser.urlencoded({extended:false}) );

server.use( express.static("public") );
server.use( express.static("xuexi") );

server.use('/work',workRouter);
server.use('/family',familyRouter);