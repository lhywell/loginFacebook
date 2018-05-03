const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

exports.Message = mongolass.model('Message', {
    title: {
        type: 'string',
        required: true
    }
})
exports.Message.index({
    title: 1,
    _id: 1
}).exec()