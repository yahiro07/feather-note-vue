export type PresetUserId = 'system' | 'guest'

export type Speech = {
  speechId: string
  contentText: string
  createAt: number
}

export type UserInfo = {
  userId: PresetUserId
  userName: string
  avatarUrl: string
}

export type Note = {
  noteId: string
  user: UserInfo
  speeches: Speech[]
}

export type UserOptions = {
  reverseThreadFlow: boolean
  showGuidanceNotes: boolean
}
