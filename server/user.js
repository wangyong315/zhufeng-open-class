const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const { json } = require('body-parser')

const _filter = {pwd: 0, __v: 0}

Router.get('/list', function (req, res) {
  const { type } = req.query
  // User.remove({}, function (err, d) {})
  User.find({ type }, function (err, doc) {
    return res.json({ code: 1, data: doc})
  })
})

Router.post('/login', function (req, res) {
  const {user, pwd} = req.body
  console.log('user', user);
  console.log('pwd', pwd);
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function (err, doc) {
    if (!doc) {
      return res.json({code: 0, msg: '用户名或者密码错误'})
    }
    res.cookie('userid', doc._id)
    return res.json({code: 1, data: doc })
  })
})

Router.post('/register', function (req, res) {
  const {user, pwd, type} = req.body
  User.findOne({user}, function (err, doc) {
    if (doc) {
      return res.json({code: 0, msg: '用户名重复'})
    }
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    userModel.save(function (e, d) {
      if (e) {
        return res.json({code: 0, msg: '后端出错了'})
      }
      const { user, type, _id } = d
      res.cookie('userid', _id)
      return res.json({code: 1, data: {user, type, _id}})
    })
  })
})

Router.post('/update', function (req, res) {
  const { userid } = req.cookies
  if (!userid) {
    return json.dump({ code: 0 })
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, function (err, doc) {
    console.log('doc', doc);
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type,
    }, body)
    console.log('data', data);
    return res.json({code: 1, data}) 
  })
})


Router.get('/info', function (req, res) {
  // 用户有没有cookie
  const {userid } = req.cookies
  if (!userid) {
    return res.json({code: 0})
  }
  User.findOne({_id: userid}, _filter, function (err, doc) {
    if (err) {
      return res.json({code: 0, msg: '后端出错了'})
    }
    if(doc) {
      return res.json({code: 1, data: doc })
    }
  })
})

function md5Pwd(pwd) {
  const salt = '*（&……@%&$#**_QPjk_wangyong'
  return utils.md5(utils.md5(salt + pwd))
}

module.exports = Router;
