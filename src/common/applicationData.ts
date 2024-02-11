export type Speech = {
  id: string
  contentText: string
}

export type Note = {
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
  speeches: [
    {
      id: '0001',
      contentText: 'hello'
    },
    {
      id: '0002',
      contentText: 'world'
    }
  ]
}
