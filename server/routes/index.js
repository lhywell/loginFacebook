module.exports = function (app) {
  app.get('/', function (req, res) {
    // res.redirect('/list')
    res.send('主页')
  })
  app.use('/list', require('./list'))
}
