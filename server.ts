// TODO add logger
// ----------- Node modules -----------
import * as express from 'express'
import * as http from 'http'
import * as cors from 'cors'

const pino = require('pino')({
  prettyPrint: process.env.NODE_ENV !== 'production'
})
const expressPino = require('express-pino-logger')({
  logger: pino
})

// Create our main app
const app = express()

// ----------- Core checker -----------

// ----------- Okazajo modules -----------
import { isTestInstance } from './helpers'
import { apiRouter } from './server/api'

// ----------- Command line -----------

// ----------- App -----------

// Enable CORS for develop
if (isTestInstance()) {
  app.use(cors({
    origin: '*',
    exposedHeaders: 'Retry-After',
    credentials: true
  }))
}

// JSON Logger with pino
app.use(expressPino)

// ----------- Views, routes and static files -----------

// API
const apiRoute = '/api/' + process.env.API_VERSION

app.use(apiRoute, apiRouter)

// ----------- Errors -----------
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err['status'] = 404
  next(err)
})

app.use(function (err, req, res, next) {
  let error = 'Unknown error.'
  if (err) {
    error = err.stack || err.message || err
  }

  req.log.error('Error in controller.', { err: error })
  return res.status(err.status || 500).end()
})

const server = http.createServer(app)

server.listen(1337, 'localhost', () => {
  pino.info('Server listening on http://%s:%d', 'localhost', 1337)
  pino.info('API index on %s', apiRoute)
})
