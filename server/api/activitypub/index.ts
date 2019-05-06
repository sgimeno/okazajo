import * as express from 'express'
import { inboxRouter } from './inbox'
// const outboxRouter = require('./outbox')

const activityPubRouter = express.Router()

activityPubRouter.use('/events', inboxRouter)

// ---------------------------------------------------------------------------
export { activityPubRouter }
