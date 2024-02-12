import type { Note, User } from '@/common/types'
import guidanceNotes from './guidanceNotes.json'

const systemUser: User = {
  userId: 'system',
  userName: 'システム',
  avatarUrl: 'https://i.imgur.com/T0tRUip.png'
}

const guestUser: User = {
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
  speeches: note.speeches
}))

const fallbackNote: Note = {
  noteId: '',
  user: systemUser,
  speeches: []
}

export const presetData = {
  systemNotes,
  presetUsers,
  fallbackNote
}
