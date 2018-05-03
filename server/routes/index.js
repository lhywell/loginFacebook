module.exports = function (app) {
  app.get('/', function (req, res) {
    // res.redirect('/list')
    res.send('主页')
  })
  app.use('/list', require('./list'))

  // 404 page
  // app.use(function (req, res) {
  //   console.log('we',res.headersSent)
  //   if (!res.headersSent) {
  //     res.status(404).render('404')
  //   }
  // })

}
