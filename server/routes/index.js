module.exports = function(app) {
app.get('/', function(req, res) {
    // res.redirect('/list')
    res.send('First')
})
app.use('/list', require('./list'))
}
