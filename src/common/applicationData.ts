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

export const exampleNote1: Note = {
  noteId: '0001',
  speeches: [
    {
      speechId: '0001',
      contentText: 'hello'
    },
    {
      speechId: '0002',
      contentText: 'world'
    }
  ]
}
