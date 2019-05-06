import * as express from 'express'
import { activityPubRouter } from './activitypub'

const apiRouter = ({ serverUrl }) => {
  const router = express.Router()
  const apiRoute = '/api/' + process.env.API_VERSION
  router.use(apiRoute, activityPubRouter)
  router.use(/^\/$/, function (req, res, next) {
    return res.json({ 
      events: `${serverUrl}${apiRoute}/events` 
    })
  })
  return router
}


export { apiRouter }
