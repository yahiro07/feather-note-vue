import { usePersistStore } from '@/store/persistStore'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', () => {
  const persistStore = usePersistStore()
  const { userOptions } = persistStore.persistData
  return {
    ...userOptions,
    setShowGuidanceNotes(value: boolean) {
      userOptions.showGuidanceNotes = value
    },
    setReverseThreadFlow(value: boolean) {
      userOptions.reverseThreadFlow = value
    }
  }
})
