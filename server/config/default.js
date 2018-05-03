module.exports = {
  port: 4000,
  session: {
    secret: 'facebook',
    key: 'facebook',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/facebook'
}
