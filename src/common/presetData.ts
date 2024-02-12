import type { Note, UserInfo } from '@/common/types'

const systemUserInfo: UserInfo = {
  userId: 'system',
  userName: 'システム',
  avatarUrl: 'https://i.imgur.com/T0tRUip.png'
}

const guestUserInfo: UserInfo = {
  userId: 'guest',
  userName: 'ユーザー',
  avatarUrl: 'https://i.imgur.com/zOObGW1.png'
}

const presetUserInfos = {
  system: systemUserInfo,
  guest: guestUserInfo
}

const appIntroductionNotes: Note[] = [
  {
    noteId: '00020',
    userId: 'system',
    speeches: [
      { speechId: '00021', contentText: 'aaa' },
      { speechId: '00022', contentText: 'bbb' }
    ]
  },
  {
    noteId: '00010',
    userId: 'system',
    speeches: [
      { speechId: '00011', contentText: 'hello' },
      { speechId: '00012', contentText: 'world' }
    ]
  }
]

const fallbackNote: Note = {
  noteId: '',
  userId: 'system',
  speeches: []
}

export const presetData = {
  allUsers: [systemUserInfo, guestUserInfo],
  appIntroductionNotes,
  presetUserInfos,
  fallbackNote
}
