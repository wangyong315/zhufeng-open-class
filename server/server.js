const express = require('express');
const mongoose = require('mongoose');
// 链接mongo 并且使用imooc这个集合 
const DB_URL = 'mongodb://localhost:27017/bosshire';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('mongo has connect sucessly');
});
// 类似mysql的表，mongo里面有文档字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true },
    age: {type: Number, require: true }
}))
// User.create({
//     user: 'xiaoming',
//     age: 20
// },function(err,doc){
//     if(!err){
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// });
// 删除age为19的数据
// User.remove({age: 19},function(err,doc){
//     console.log(doc);
// });
// 更新数据
// User.update({user: 'xiaoming'},{'$set': {age: 26}},function(err,doc){
//     console.log(doc);
// });
// 新建app
const app = express();
app.get('/',function(req,res){
    res.send('<h1>hello world</h1>');
});
app.get('/data',function(req,res){
    User.find({user: 'xiaoming'}, function(err,doc){
      res.json(doc);
    })
    // res.json({name: 'wangyongggg',type: 'iiii'});
});
app.listen(9093,function(){
    console.log('Node app start at port 9093');
});