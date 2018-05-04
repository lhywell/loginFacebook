const express = require('express')
const router = express.Router()

const PostModel = require('../models/message')

// GET message list
router.get('/', function(req, res, next) {
    PostModel.getArticles()
        .then(function(posts) {
            //Allow cross-domain
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            //send json
            res.json(posts)
        })
        .catch(next)
})

// Post a message
router.post('/add', function(req, res, next) {
    console.log(1111, req.fields.title)
    let title = req.fields.title;
    PostModel.postArticles(title)
        .then(function(posts) {
            //Allow cross-domain
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