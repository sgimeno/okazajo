import {
  Actor,
  Signature
} from './'

export type Activity = ActivityCreate

export type ActivityType = 'Create' | 'Update' | 'Delete'

export interface BaseActivity {
  '@context'?: any[]
  id: string
  to?: string[]
  cc?: string[]
  actor: string | Actor
  type: ActivityType
  signature?: Signature
}

export interface ActivityCreate extends BaseActivity {
  type: 'Create'
  object: any
}
  