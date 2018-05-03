const express = require('express')
const router = express.Router()

const PostModel = require('../models/message')

// GET 文章页列表
router.get('/', function(req, res, next) {
    PostModel.getArticles()
        .then(function(posts) {
            //允许跨域
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            //发送json格式接口
            res.json(posts)
        })
        .catch(next)
})

// Post 文章页列表
router.post('/add', function(req, res, next) {
    console.log(1111, req.fields.title)
    let title = req.fields.title;
    PostModel.postArticles(title)
        .then(function(posts) {
            //允许跨域
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');

            res.json({
                code: 200,
                msg: 'sucess'
            })
        })
        .catch(next)
})



module.exports = router