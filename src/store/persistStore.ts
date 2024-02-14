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
    reverseThreadFlow: false,
    showGuidanceNotes: true
  }
}

export const usePersistStore = defineStore('persistStore', () => {
  function migratePersistData(data: PersistData) {
    data.userOptions = { ...defaultPersistData.userOptions, ...data.userOptions }
  }

  const persistData = useLocalStorage<PersistData>(
    'feather_note_persist_data',
    defaultPersistData,
    {
      mergeDefaults: (storageValue, defaults) => {
        const merged = { ...defaults, ...storageValue }
        migratePersistData(merged)
        return merged
      }
    }
  )

  function resetPersistData() {
    persistData.value = defaultPersistData
    location.reload()
  }

  return { persistData, resetPersistData }
})
