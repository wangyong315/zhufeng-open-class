#!/usr/bin/env node
const path = require('path')
// gulp实例
const gulpInst = require('../lib')

const registerExports = require('./register-exports')

// 获取任务名称
const taskName = process.argv[2]

const toRun = taskName || 'default'
// 获取配置文件
const configPath = path.join(process.cwd(), 'gulpfile.js')
console.log(`Using gulpfile ${configPath}`);
// 获取导出对象
const exported = require(configPath)

registerExports(gulpInst, exported)

gulpInst.parallel(toRun)(() => console.log('well done'))