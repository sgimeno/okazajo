// Actor or user
import { Actor } from '../../activitypub/models'

export interface Event {
  '@context': any[]
  id: string
  name: string
  description: string
  type: string
  createdBy: Actor
  date: Date
  dateStart?: Date
  dateEnd?: Date
  createdAt: Date
  updatedAt: Date
  location?: any
}