import * as express from 'express'
import { activityPubRouter } from './activitypub'

const apiRouter = express.Router()

apiRouter.use('/', activityPubRouter)
apiRouter.use('/ping', function (req, res, next) {
  return res.send('pong').status(200).end()
})

export { apiRouter }
