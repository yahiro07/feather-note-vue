export type PresetUserId = 'system' | 'guest'

export type Speech = {
  speechId: string
  contentText: string
}

export type User = {
  userId: PresetUserId
  userName: string
  avatarUrl: string
}

export type Note = {
  noteId: string
  user: User
  speeches: Speech[]
}
