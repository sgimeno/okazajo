export type ActorType = 'Person' | 'Application' | 'Group'

export interface Actor {
  '@context': any[]
  type: ActorType
  id: string
  name: string
}