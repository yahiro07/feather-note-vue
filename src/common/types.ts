export type PresetUserId = 'system' | 'guest'

export type Speech = {
  speechId: string
  contentText: string
}

export type Note = {
  noteId: string
  userId: PresetUserId
  speeches: Speech[]
}

export type UserInfo = {
  userId: PresetUserId
  userName: string
  avatarUrl: string
}
