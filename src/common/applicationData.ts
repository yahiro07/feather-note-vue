export type Speech = {
  speechId: string
  contentText: string
}

export type Note = {
  noteId: string
  speeches: Speech[]
}

export type UserInfo = {
  userId: string
  userName: string
  avatarUrl: string
}

export const exampleUserInfo: UserInfo = {
  userId: 'user1',
  userName: 'ユーザー1',
  avatarUrl: 'https://i.imgur.com/T0tRUip.png'
}

export const exampleNotes: Note[] = [
  {
    noteId: '00010',
    speeches: [
      { speechId: '00011', contentText: 'hello' },
      { speechId: '00012', contentText: 'world' }
    ]
  },
  {
    noteId: '00020',
    speeches: [
      { speechId: '00021', contentText: 'aaa' },
      { speechId: '00022', contentText: 'bbb' }
    ]
  }
]
