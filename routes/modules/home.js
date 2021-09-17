// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const Todo = require('../../models/todo')


// 準備引入路由模組

router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .sort({ isDone: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))

})


// 匯出路由器
module.exports = router