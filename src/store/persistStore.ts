import { presetData } from '@/common/presetData'
import type { Note, UserInfo, UserOptions } from '@/common/types'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

type PersistData = {
  userNotes: Note[]
  userInfo: UserInfo
  userOptions: UserOptions
}

const defaultPersistData: PersistData = {
  userNotes: [],
  userInfo: presetData.presetUsers['guest'],
  userOptions: {
    reverseThreadFlow: false
  }
}

export const usePersistStore = defineStore('persistStore', () => {
  const persistData = useLocalStorage<PersistData>(
    'feather_note_persist_data',
    defaultPersistData,
    { mergeDefaults: true }
  )
  return { persistData }
})
