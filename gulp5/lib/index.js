const util = require('util')
const Undertaker = require('undertaker')

function Glup(){
    Undertaker.call(this)
    // 吧原型上的task方法绑定到当前的gulp对象实例为this 后 付给this.task
    this.task = this.task.bind(this)
    this.series = this.series.bind(this)
    this.parallel = this.parallel.bind(this)
}

util.inherits(Glup, Undertaker)

const inst = new Glup()

module.exports = inst
