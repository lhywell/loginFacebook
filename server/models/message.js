const Message = require('../lib/mongo').Message

module.exports = {
    getArticles: function getArticles() {
        const query = {}
        return Message
            .find()
            .exec()
    },
    postArticles: function postArticles(title) {
        return Message
            .insertOne({
                title: title
            })
            .exec()
    }
}