const Message = require('../lib/mongo').Message


module.exports = {
  getArticles: function getArticles () {
  	const query = {}
    return Message
      .find()
      .exec()
  },
  postArticles: function postArticles () {
  	console.log(1212)
    return Message
      .insertOne({ title: 'sss'})
      .exec()
  }
}