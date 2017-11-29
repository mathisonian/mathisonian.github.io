// server.js
const next = require('next')
const { parse } = require('url')

const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production', quiet: false})
// const handler = routes.getRequestHandler(app)
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  const { pathname } = parse(req.url, true)
  if (pathname.indexOf('/weblog') === 0) {
    res.statusCode = 302;
    res.setHeader("Location", pathname.replace('weblog', 'writing'));
    res.end();
  } else if (pathname.indexOf('/about') === 0) {
    res.statusCode = 302;
    res.setHeader("Location", '/');
    res.end();
  } else if (pathname.indexOf('/portfolio') === 0) {
    res.statusCode = 302;
    res.setHeader("Location", '/');
    res.end();
  } else if (pathname.indexOf('/com.asmallgrin.www') === 0) {
    res.statusCode = 302;
    res.setHeader("Location", '/writing/keith');
    res.end();
  } else {
    app.render(req, res, route.page, query)
  }
})
// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})
