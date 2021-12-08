function registerExports (gulpInst, tasks){
    Object.keys(tasks).forEach(taskName => {
        gulpInst.task(taskName, tasks[taskName])
    })
}

module.exports = registerExports