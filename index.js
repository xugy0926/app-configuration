const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const isAuthorized = require('./auth')

server.use(middlewares)
server.use((req, res, next) => {
 if (isAuthorized(req)) {
   next()
 } else {
   res.sendStatus(401)
 }
})
server.use(router)
server.listen(process.env.PORT || 3000, () => {
  console.log('configuration Server is running')
})