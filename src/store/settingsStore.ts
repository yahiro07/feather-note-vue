import { usePersistStore } from '@/store/persistStore'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', () => {
  const {
    persistData: { userOptions, userInfo }
  } = usePersistStore()
  return { userOptions, userInfo }
})
