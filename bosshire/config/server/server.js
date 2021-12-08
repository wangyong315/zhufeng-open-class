const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function (socket) {
    console.log('user login');
    socket.on('sendmsg', function (data) {
        console.log('data', data);
        io.emit('recvmsg', data)
    })
})

// 新建app
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

server.listen(9093,function(){
    console.log('Node app start at port 9093');
});