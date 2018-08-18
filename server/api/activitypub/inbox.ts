import * as express from 'express'

const inboxRouter = express.Router()

inboxRouter.post('/inbox', function (req, res, next) {
  return res.send('inbox').status(200).end()
})

export default inboxRouter
