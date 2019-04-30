// TODO add logger
// ----------- Node modules -----------
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as http from 'http'
import * as cors from 'cors'
import { logger } from './logger'

const expressPino = require('express-pino-logger')({ logger })

// Create our main app
const app = express()

// ----------- Core checker -----------

// ----------- Okazajo modules -----------
import { isTestInstance } from './helpers'
import { apiRouter } from './server/api'
import { configure } from './server/db'

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

// For body requests
app.use(bodyParser.json())


// ----------- Views, routes and static files -----------

// DB

configure({ 
  baseURL: `http://localhost:${process.env.STATE_PORT}`,
  token: process.env.STATE_TOKEN
})

// API
const port = parseInt(process.env.PORT) || 1337
const host = process.env.HOST || 'localhost'
const scheme = process.env.SSL === 'true' ? 'https' : 'http'

app.use(apiRouter({ serverUrl: `${scheme}://${host}:${port}` }))

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

server.listen(port, 'localhost', () => {
  logger.info('Server listening on http://%s:%d', 'localhost', port)
})
