import type { Note, UserInfo } from '@/common/types'
import guidanceNotes from './guidanceNotes.json'

const systemUser: UserInfo = {
  userId: 'system',
  userName: 'システム',
  avatarUrl: 'https://i.imgur.com/T0tRUip.png'
}

const guestUser: UserInfo = {
  userId: 'guest',
  userName: 'ユーザー',
  avatarUrl: 'https://i.imgur.com/zOObGW1.png'
}

const presetUsers = {
  system: systemUser,
  guest: guestUser
}

const systemNotes: Note[] = guidanceNotes.map((note) => ({
  noteId: note.noteId,
  user: systemUser,
  speeches: note.speeches,
  createAt: note.createAt
}))

const fallbackNote: Note = {
  noteId: '',
  user: systemUser,
  speeches: [],
  createAt: 0
}

export const presetData = {
  systemNotes,
  presetUsers,
  fallbackNote
}
