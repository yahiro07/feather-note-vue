import type { Note, User } from '@/common/types'

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

const systemNotes: Note[] = [
  {
    noteId: '00020',
    user: systemUser,
    speeches: [
      { speechId: '00021', contentText: 'aaa' },
      { speechId: '00022', contentText: 'bbb' }
    ]
  },
  {
    noteId: '00010',
    user: systemUser,
    speeches: [
      { speechId: '00011', contentText: 'hello' },
      { speechId: '00012', contentText: 'world' }
    ]
  }
]

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
