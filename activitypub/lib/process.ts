import * as debug from 'debug'

import { Activity, ActivityType, Actor } from '../models'
// TODO de-couple
import * as db from '../../server/db'

const log = debug('activitypub')

async function processCreateActivity (activity: Activity) {
    log('Creating.. ', activity)
    return db.create('/okazajo-db', activity)
}

const processActivity: { [ P in ActivityType ]: (activity: Activity) => Promise<any> } = {
    Create: processCreateActivity,
    Update: _ => Promise.reject(),
    Delete: _ => Promise.reject()
}
  
export async function processActivities (activities: Activity[]) {
    log('processing', activities)
    for (const activity of activities) {
        const activityProcessor = processActivity[activity.type]
        try {
            await activityProcessor(activity)
          } catch (err) {              
            log('Cannot process activity %s.', activity.type, { err })
          }
    }
}