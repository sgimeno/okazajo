import * as express from 'express'
import { queue } from 'async'

import {
  Activity
} from '../../../activitypub/models'
import {
  processActivities
} from '../../../activitypub/lib/process'

const inboxRouter = express.Router()

inboxRouter.post('/inbox', inboxController)


// ---------------------------------------------------------------------------

export {
  inboxRouter
}

// ---------------------------------------------------------------------------
const inboxQueue = queue<{ activities: Activity[], signatureActor?: any, inboxActor?: any }, Error>((task, cb) => {
  // const options = { signatureActor: task.signatureActor, inboxActor: task.inboxActor }
  processActivities(task.activities)
    .then((ovni) => {
      console.log('OVNI', ovni);
      
      cb()
    })
})

function inboxController (req: express.Request, res: express.Response) {
  const activity: Activity = req.body
  let activities: Activity[] = [ activity as Activity ]
  console.log('Pushing activities', activities);
  
  inboxQueue.push({
    activities
  })
    
  return res.status(204).end()
}

