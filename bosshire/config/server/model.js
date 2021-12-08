const mongoose = require('mongoose');
// 链接mongo 并且使用imooc这个集合 
const DB_URL = 'mongodb://localhost:27017/bosshire';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('mongo has connect sucessly');
});


const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        'avatar': {type: String },
        'desc': {type: String},
        'title': {type: String},
        'company': {type: String},
        'money': {type: String},
    },
    chart: {
        'chatid': {type: String, require: true },
        'from': {type: String, require: true},
        'to': {type: String, require: true},
        'read': {type: Boolean, default: false},
        'content': {type: String, require: true, default: ''},
        'create_time': {type: Number, require: true, default: new Date().getTime()}
    }
}

for (const m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}